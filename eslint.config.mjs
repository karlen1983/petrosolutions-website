import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
    // The dialhub site is a self-contained Next.js project that has its
    // own build/lint pipeline. Keep it out of the petrosolutions lint pass.
    "dialhub/**",
    // OpenNext / Wrangler build output — generated bundles, never lint.
    ".open-next/**",
    ".wrangler/**",
  ]),
]);

export default eslintConfig;
