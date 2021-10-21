export function uCFirst(value: string): string {
	let first = value.charAt(0).toUpperCase();

	return first + value.slice(1);
}

export function validateNumberBetween(
	minimum: number,
	maximum: number,
	value: number,
): boolean {
	// validate the constraints are logical
	if (minimum > maximum || maximum < minimum) {
		return false;
	}

	return value >= minimum && value <= maximum;
}
