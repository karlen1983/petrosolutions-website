"use client";

import { useEffect } from "react";

// Same-page hash navigation can be flaky when Next.js Link sees an identical
// route — the URL updates but the browser's native hash scroll never fires.
// This handler intercepts any anchor click whose target is "#id" or "/#id"
// (or "/path#id" matching the current pathname) and scrolls explicitly.
export function HashScrollHandler() {
  useEffect(() => {
    function scrollToHash(hash: string, replaceUrl = false) {
      if (!hash) return;
      const id = hash.replace(/^#/, "");
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
      if (!replaceUrl) {
        const target = `${window.location.pathname}#${id}`;
        if (window.location.hash !== `#${id}`) {
          window.history.pushState(null, "", target);
        }
      }
    }

    function onClick(e: MouseEvent) {
      // Respect modifier-clicks, middle-click, and right-click
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
        // Handle "/path#id" only when path matches current pathname
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
      scrollToHash(hash);
    }

    document.addEventListener("click", onClick);

    // Honor an initial-load hash (e.g. user lands on /#contact directly)
    if (window.location.hash) {
      // Defer to next tick so the page has a chance to lay out
      window.setTimeout(() => scrollToHash(window.location.hash, true), 50);
    }

    function onPopState() {
      if (window.location.hash) {
        scrollToHash(window.location.hash, true);
      }
    }
    window.addEventListener("popstate", onPopState);

    return () => {
      document.removeEventListener("click", onClick);
      window.removeEventListener("popstate", onPopState);
    };
  }, []);

  return null;
}
