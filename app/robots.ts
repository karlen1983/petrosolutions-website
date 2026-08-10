import type { MetadataRoute } from "next";
import { absoluteUrl } from "@/lib/site";

/**
 * AI retrieval/search crawlers that fetch pages to answer user queries and to
 * build search indexes. These are listed explicitly so they stay allowed even
 * if the wildcard group is tightened later.
 *
 * Model-training crawlers (GPTBot, ClaudeBot, CCBot, Google-Extended, ...) are
 * deliberately NOT listed here. The site's Cloudflare configuration publishes a
 * `Content-Signal: ai-train=no` opt-out and disallows those agents; naming them
 * here with an Allow rule would contradict that opt-out inside a single file.
 * Leave that decision to the Cloudflare AI-crawler settings.
 */
const AI_SEARCH_CRAWLERS = [
  // OpenAI
  "OAI-SearchBot",
  "ChatGPT-User",
  // Anthropic
  "Claude-SearchBot",
  "Claude-User",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: "/api/",
      },
      // A named group fully replaces the wildcard group for that crawler, so
      // each one repeats the /api/ exclusion rather than inheriting it.
      ...AI_SEARCH_CRAWLERS.map((userAgent) => ({
        userAgent,
        allow: "/",
        disallow: "/api/",
      })),
    ],
    sitemap: absoluteUrl("/sitemap.xml"),
  };
}
