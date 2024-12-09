import { defineCollection, z } from "astro:content";

// Post collection schema
const blogCollection = defineCollection({
	schema: z.object({
		title: z.string(),
		description: z.string().optional(),
		date: z.date().optional(),
		image: z.string().optional(),
		author: z.string().default("Admin"),
		draft: z.boolean().optional(),
	}),
});

// Export collections
export const collections = {
	blog: blogCollection,
};
