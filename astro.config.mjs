import site from "./src/site.json";

// @ts-check
import { defineConfig } from "astro/config";

import tailwind from "@astrojs/tailwind";

import react from "@astrojs/react";

export default defineConfig({
	base: site.basePath,
	integrations: [tailwind(), react()],
	site: site.baseUrl,
});
