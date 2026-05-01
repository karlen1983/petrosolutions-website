"use client";

import { useEffect } from "react";

// Two pieces of behavior:
//
// 1. Click interception — same-page hash links don't fire a native scroll
//    when the URL hash already matches (browser sees no navigation), and
//    Next.js Link doesn't help either. We intercept any anchor whose href
//    resolves to "#id" / "/#id" / "/path#id" on the current pathname and
//    call scrollIntoView() unconditionally.
//
// 2. Scroll spy — as the user scrolls, replaceState() the hash to whichever
//    section is currently on screen, so the URL bar stays honest and the
//    "URL stuck on #contact" problem disappears.
export function HashScrollHandler() {
  useEffect(() => {
    function scrollToId(id: string, updateUrl = true) {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (updateUrl) {
        const target = `${window.location.pathname}#${id}`;
        if (window.location.hash !== `#${id}`) {
          window.history.pushState(null, "", target);
        }
      }
    }

    function onClick(e: MouseEvent) {
      if (
        e.defaultPrevented ||
        e.button !== 0 ||
        e.metaKey ||
        e.ctrlKey ||
        e.shiftKey ||
        e.altKey
      ) {
        return;
      }

      const target = e.target as HTMLElement | null;
      const anchor = target?.closest("a");
      if (!anchor) return;
      if (anchor.target && anchor.target !== "_self") return;

      const href = anchor.getAttribute("href");
      if (!href) return;

      let hash = "";
      if (href.startsWith("#")) {
        hash = href.slice(1);
      } else if (href.startsWith("/#")) {
        hash = href.slice(2);
      } else {
        try {
          const url = new URL(href, window.location.origin);
          if (
            url.origin === window.location.origin &&
            url.pathname === window.location.pathname &&
            url.hash
          ) {
            hash = url.hash.slice(1);
          }
        } catch {
          return;
        }
      }

      if (!hash) return;
      const el = document.getElementById(hash);
      if (!el) return;

      e.preventDefault();
      scrollToId(hash);
    }

    document.addEventListener("click", onClick);

    // Honor an initial-load hash (e.g. someone lands on /#contact directly).
    if (window.location.hash) {
      window.setTimeout(
        () => scrollToId(window.location.hash.slice(1), false),
        50
      );
    }

    function onPopState() {
      if (window.location.hash) {
        scrollToId(window.location.hash.slice(1), false);
      }
    }
    window.addEventListener("popstate", onPopState);

    // Scroll spy — keep the URL bar in sync with the section actually on
    // screen. Uses replaceState so we don't pollute browser history.
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("section[id]")
    );

    let activeId: string | null = window.location.hash
      ? window.location.hash.slice(1)
      : null;

    function syncHash(nextId: string | null) {
      if (nextId === activeId) return;
      activeId = nextId;
      const path = window.location.pathname;
      const target = nextId ? `${path}#${nextId}` : path;
      if (
        window.location.pathname + window.location.hash !== target &&
        window.location.pathname !== target
      ) {
        window.history.replaceState(null, "", target);
      }
    }

    let observer: IntersectionObserver | null = null;
    if (sections.length > 0 && "IntersectionObserver" in window) {
      const visible = new Map<string, number>();
      observer = new IntersectionObserver(
        (entries) => {
          for (const entry of entries) {
            const id = (entry.target as HTMLElement).id;
            if (entry.isIntersecting) {
              visible.set(id, entry.intersectionRatio);
            } else {
              visible.delete(id);
            }
          }
          if (visible.size === 0) {
            // Above the first section (e.g. very top of page) — clear hash.
            if (window.scrollY < 200) syncHash(null);
            return;
          }
          // Pick the most-visible section. Fall back to source order.
          let bestId: string | null = null;
          let bestRatio = -1;
          for (const section of sections) {
            const ratio = visible.get(section.id);
            if (ratio !== undefined && ratio > bestRatio) {
              bestRatio = ratio;
              bestId = section.id;
            }
          }
          syncHash(bestId);
        },
        {
          // Trigger when a section is roughly mid-screen, accounting for the
          // sticky header at the top.
          rootMargin: "-30% 0px -55% 0px",
          threshold: [0, 0.25, 0.5, 0.75, 1],
        }
      );
      sections.forEach((section) => observer!.observe(section));
    }

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
      observer?.disconnect();
    };
  }, []);

  return null;
}
