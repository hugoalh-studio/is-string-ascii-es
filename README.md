# Is String ASCII (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/is-string-ascii-es](https://img.shields.io/github/v/release/hugoalh-studio/is-string-ascii-es?label=hugoalh-studio/is-string-ascii-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/is-string-ascii-es")](https://github.com/hugoalh-studio/is-string-ascii-es)
[![JSR: @hugoalh/is-string-ascii](https://img.shields.io/jsr/v/@hugoalh/is-string-ascii?label=@hugoalh/is-string-ascii&labelColor=F7DF1E&logo=jsr&logoColor=000000&style=flat "JSR: @hugoalh/is-string-ascii")](https://jsr.io/@hugoalh/is-string-ascii)
[![NPM: @hugoalh/is-string-ascii](https://img.shields.io/npm/v/@hugoalh/is-string-ascii?label=@hugoalh/is-string-ascii&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/is-string-ascii")](https://www.npmjs.com/package/@hugoalh/is-string-ascii)

An ES (JavaScript & TypeScript) module to determine whether the string is ASCII.

## 🔰 Begin

### 🎯 Targets

|  | **Remote** | **JSR** | **NPM** |
|:--|:--|:--|:--|
| **[Bun](https://bun.sh/)** >= v1.1.0 | ❌ | ❓ | ✔️ |
| **[Cloudflare Workers](https://workers.cloudflare.com/)** | ❌ | ❓ | ✔️ |
| **[Deno](https://deno.land/)** >= v1.42.0 | ✔️ | ✔️ | ✔️ |
| **[NodeJS](https://nodejs.org/)** >= v16.13.0 | ❌ | ❓ | ✔️ |

> [!NOTE]
> - It is possible to use this module in other methods/ways which not listed in here, however those methods/ways are not officially supported, and should beware maybe cause security issues.

### #️⃣ Resources Identifier

- **Remote - GitHub Raw:**
  ```
  https://raw.githubusercontent.com/hugoalh-studio/is-string-ascii-es/{Tag}/mod.ts
  ```
- **JSR:**
  ```
  [jsr:]@hugoalh/is-string-ascii[@{Tag}]
  ```
- **NPM:**
  ```
  [npm:]@hugoalh/is-string-ascii[@{Tag}]
  ```

> [!NOTE]
> - For usage of remote resources, it is recommended to import the entire module with the main path `mod.ts`, however it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `_bar`, `_foo`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - For usage of JSR or NPM resources, it is recommended to import the entire module with the main entrypoint, however it is also able to import part of the module with sub entrypoint if available, please visit the [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub entrypoints.
> - It is recommended to use this module with tag for immutability.

### 🛡️ Require Runtime Permissions

*This module does not require any runtime permission.*

## 🧩 APIs

- ```ts
  function isStringASCII(item: string): boolean;
  ```
- ```ts
  function isStringASCIIControl(item: string): boolean;
  ```
- ```ts
  function isStringASCIIPrintable(item: string): boolean;
  ```

> [!NOTE]
> - For the prettier documentation, can visit via:
>   - [Deno CLI `deno doc`](https://docs.deno.com/runtime/reference/cli/documentation_generator/)
>   - [JSR](https://jsr.io/@hugoalh/is-string-ascii)

## ✍️ Examples

- ```ts
  isStringASCII("日本語");
  //=> false
  ```
- ```ts
  isStringASCII("👀");
  //=> false
  ```
- ```ts
  isStringASCII("Hello, world!");
  //=> true
  ```
- ```ts
  isStringASCII("");
  //=> true
  ```
