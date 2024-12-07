import siteConfig from "./src/config/site.json";

// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
	base: siteConfig.basePath,
	integrations: [tailwind(), react()],
	siteConfig: siteConfig.baseUrl,
});
