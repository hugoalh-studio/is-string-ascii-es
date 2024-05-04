const regexpASCIIPrintable = /^[\x20-\x7E]*$/;
/**
 * Determine whether the string is ASCII printable characters.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 */
export function isStringASCIIPrintable(item: string): boolean {
	return regexpASCIIPrintable.test(item);
}
export default isStringASCIIPrintable;
