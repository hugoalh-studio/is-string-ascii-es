import { isStringASCII, isStringASCIIControl, isStringASCIIPrintable } from "./mod.ts";
const sample1 = "日本語";
const sample2 = "👀";
const sample3 = "Hello, world!";
const sample4 = "";
const sample5 = `Wisi sed et at vero eos nostrud volutpat sed stet dignissim sit sanctus in eros.
Et laoreet odio sanctus ea.
Sea in dolores diam tincidunt labore sea stet vero dolor ut est.
At aliquyam diam facilisis lorem et takimata et volutpat eros erat ipsum velit labore sed ea illum.
Dolor lorem sed et volutpat exerci gubergren gubergren tempor quis ea eirmod eos ut dolor autem ipsum accumsan.`;
Deno.bench("1 All", { permissions: "none" }, () => {
	isStringASCII(sample1);
});
Deno.bench("1 Control", { permissions: "none" }, () => {
	isStringASCIIControl(sample1);
});
Deno.bench("1 Printable", { permissions: "none" }, () => {
	isStringASCIIPrintable(sample1);
});
Deno.bench("2 All", { permissions: "none" }, () => {
	isStringASCII(sample2);
});
Deno.bench("2 Control", { permissions: "none" }, () => {
	isStringASCIIControl(sample2);
});
Deno.bench("2 Printable", { permissions: "none" }, () => {
	isStringASCIIPrintable(sample2);
});
Deno.bench("3 All", { permissions: "none" }, () => {
	isStringASCII(sample3);
});
Deno.bench("3 Control", { permissions: "none" }, () => {
	isStringASCIIControl(sample3);
});
Deno.bench("3 Printable", { permissions: "none" }, () => {
	isStringASCIIPrintable(sample3);
});
Deno.bench("4 All", { permissions: "none" }, () => {
	isStringASCII(sample4);
});
Deno.bench("4 Control", { permissions: "none" }, () => {
	isStringASCIIControl(sample4);
});
Deno.bench("4 Printable", { permissions: "none" }, () => {
	isStringASCIIPrintable(sample4);
});
Deno.bench("5 All", { permissions: "none" }, () => {
	isStringASCII(sample5);
});
Deno.bench("5 Control", { permissions: "none" }, () => {
	isStringASCIIControl(sample5);
});
Deno.bench("5 Printable", { permissions: "none" }, () => {
	isStringASCIIPrintable(sample5);
});
