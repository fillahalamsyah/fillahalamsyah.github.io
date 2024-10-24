import { defineConfig } from "astro/config";
import customToc from "astro-custom-toc";

// https://astro.build/config
export default defineConfig({
    // ... other config
    integrations: [customToc()],
});