export function formatDate(date: Date | string): string {
	return new Date(date).toLocaleDateString("en-us", {
		day: "numeric",
		month: "long",
		year: "numeric",
	});
}
