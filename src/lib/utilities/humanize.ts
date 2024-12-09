export const humanize = (content: string) => {
	return content
		.replace(/^[\s_]+|[\s_]+$/g, "")
		.replace(/[_\s]+/g, " ")
		.replace(/[-\s]+/g, " ")
		.replace(/^[a-z]/, (m) => m.toUpperCase());
};
