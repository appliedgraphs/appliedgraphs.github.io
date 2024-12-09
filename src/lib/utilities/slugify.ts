import { slug } from "github-slugger";

export const slugify = (content: string) => {
	return slug(content);
};
