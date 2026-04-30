import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
};

// Initialize OpenNext Cloudflare bindings during local `next dev`
// so server code can access env vars / bindings during development.
if (process.env.NODE_ENV === "development") {
  import("@opennextjs/cloudflare").then(({ initOpenNextCloudflareForDev }) => {
    initOpenNextCloudflareForDev();
  });
}

export default nextConfig;
