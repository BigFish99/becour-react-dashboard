export const testNumber = (min = 0, max = 100) => {
	return Math.max(Math.min(Math.floor(Math.random() * max), Math.max(min, max)), Math.min(min, max));
}