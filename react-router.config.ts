import type { Config } from "@react-router/dev/config";
import { viteConfig } from "vite.config";
export default {
  // Config options...
  // Server-side render by default, to enable SPA mode set this to `false`
  ssr: false,
  prerender: true,
  basename: viteConfig.base,
} satisfies Config;
