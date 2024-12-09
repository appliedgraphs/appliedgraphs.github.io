import { defineCollection, z } from "astro:content";

// Post collection schema
const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.date(),
		image: z.string().optional(),
		draft: z.boolean().optional(),
	}),
});

// Export collections
export const collections = {
	blog: blogCollection,
};
