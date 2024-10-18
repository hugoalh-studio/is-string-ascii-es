//deno-lint-ignore no-control-regex
const regexpASCII = /^[\x00-\x7F]*$/;
/**
 * Determine whether the string is ASCII.
 * @param {string} item Item that need to determine.
 * @returns {boolean} Determine result.
 * @example 1
 * ```ts
 * isStringASCII("日本語");
 * //=> false
 * ```
 * @example 2
 * ```ts
 * isStringASCII("👀");
 * //=> false
 * ```
 * @example 3
 * ```ts
 * isStringASCII("Hello, world!");
 * //=> true
 * ```
 * @example 4
 * ```ts
 * isStringASCII("");
 * //=> true
 * ```
 */
export function isStringASCII(item: string): boolean {
	return regexpASCII.test(item);
}
export default isStringASCII;
