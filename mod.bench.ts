import { isStringASCII, isStringASCIIControl, isStringASCIIPrintable } from "./mod.ts";
Deno.bench("1", { permissions: "none" }, () => {
	const sample = "日本語";
	isStringASCII(sample);
	isStringASCIIControl(sample);
	isStringASCIIPrintable(sample);
});
Deno.bench("2", { permissions: "none" }, () => {
	const sample = "👀";
	isStringASCII(sample);
	isStringASCIIControl(sample);
	isStringASCIIPrintable(sample);
});
Deno.bench("3", { permissions: "none" }, () => {
	const sample = "Hello, world!";
	isStringASCII(sample);
	isStringASCIIControl(sample);
	isStringASCIIPrintable(sample);
});
Deno.bench("4", { permissions: "none" }, () => {
	const sample = "";
	isStringASCII(sample);
	isStringASCIIControl(sample);
	isStringASCIIPrintable(sample);
});
