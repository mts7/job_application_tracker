export function uCFirst(value: string): string {
	let first = value.charAt(0).toUpperCase();

	return first + value.slice(1);
}
