import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async headers() {
    return [
      {
        // Advertise the machine-readable site summary to AI agents and
        // crawlers on HTML responses. Static assets under /_next and the
        // API routes are excluded — the hint is only meaningful on pages.
        source: "/((?!_next/|api/).*)",
        headers: [
          {
            key: "Link",
            value: '</llms.txt>; rel="describedby"; type="text/plain"',
          },
        ],
      },
    ];
  },
};

// Initialize OpenNext Cloudflare bindings during local `next dev`
// so server code can access env vars / bindings during development.
if (process.env.NODE_ENV === "development") {
  import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) => {
    initOpenNextCloudflareForDev();
  });
}

export default nextConfig;
