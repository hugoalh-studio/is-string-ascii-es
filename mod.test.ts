import { assertEquals } from "STD/assert/assert-equals";
import { isStringASCII, isStringASCIIControl, isStringASCIIPrintable } from "./mod.ts";
Deno.test("1", { permissions: "none" }, () => {
	const sample = "日本語";
	assertEquals(isStringASCII(sample), false);
	assertEquals(isStringASCIIControl(sample), false);
	assertEquals(isStringASCIIPrintable(sample), false);
});
Deno.test("2", { permissions: "none" }, () => {
	const sample = "👀";
	assertEquals(isStringASCII(sample), false);
	assertEquals(isStringASCIIControl(sample), false);
	assertEquals(isStringASCIIPrintable(sample), false);
});
Deno.test("3", { permissions: "none" }, () => {
	const sample = "Hello, world!";
	assertEquals(isStringASCII(sample), true);
	assertEquals(isStringASCIIControl(sample), false);
	assertEquals(isStringASCIIPrintable(sample), true);
});
Deno.test("4", { permissions: "none" }, () => {
	const sample = "";
	assertEquals(isStringASCII(sample), true);
	assertEquals(isStringASCIIControl(sample), true);
	assertEquals(isStringASCIIPrintable(sample), true);
});
