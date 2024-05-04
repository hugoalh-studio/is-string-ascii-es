# Is String ASCII (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/is-string-ascii-es](https://img.shields.io/github/v/release/hugoalh-studio/is-string-ascii-es?label=hugoalh-studio/is-string-ascii-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/is-string-ascii-es")](https://github.com/hugoalh-studio/is-string-ascii-es)
[![JSR: @hugoalh/is-string-ascii](https://img.shields.io/jsr/v/@hugoalh/is-string-ascii?label=JSR%20@hugoalh/is-string-ascii&labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/is-string-ascii")](https://jsr.io/@hugoalh/is-string-ascii)
[![NPM: @hugoalh/is-string-ascii](https://img.shields.io/npm/v/@hugoalh/is-string-ascii?label=@hugoalh/is-string-ascii&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/is-string-ascii")](https://www.npmjs.com/package/@hugoalh/is-string-ascii)

An ES (JavaScript & TypeScript) module to determine whether the string is ASCII.

## 🔰 Begin

### 🎯 Targets

|  | **Registry - JSR** | **Registry - NPM** | **Remote Import** |
|:--|:--|:--|:--|
| **[Bun](https://bun.sh/)** >= v1.1.0 | [✔️ `node_modules`](https://jsr.io/docs/npm-compatibility) | [✔️ Specifier `npm:`](https://bun.sh/docs/runtime/autoimport) | ❌ |
| **[Cloudflare Workers](https://workers.cloudflare.com/)** | [✔️ `node_modules`](https://jsr.io/docs/with/cloudflare-workers) | [✔️ `node_modules`](https://docs.npmjs.com/using-npm-packages-in-your-projects) | ❌ |
| **[Deno](https://deno.land/)** >= v1.42.0 | [✔️ Specifier `jsr:`](https://jsr.io/docs/with/deno) | [✔️ Specifier `npm:`](https://docs.deno.com/runtime/manual/node/npm_specifiers) | [✔️](https://docs.deno.com/runtime/manual/basics/modules/#remote-import) |
| **[NodeJS](https://nodejs.org/)** >= v16.13.0 | [✔️ `node_modules`](https://jsr.io/docs/with/node) | [✔️ `node_modules`](https://docs.npmjs.com/using-npm-packages-in-your-projects) | ❌ |

> **ℹ️ Note**
>
> It is possible to use this module in other ways which not listed in here, however it is not officially supported.

### #️⃣ Registries Identifier

<table><tbody align="left">
<tr>
<th>JSR</th>
<td width="100%">

```
@hugoalh/is-string-ascii
```

</td>
</tr>
<tr>
<th>NPM</th>
<td width="100%">

```
@hugoalh/is-string-ascii
```

</td>
</tr>
</tbody></table>

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to use this module with tag for immutability.

### #️⃣ Remote Import Paths

- Via GitHub Raw (Require Tag)
  ```
  https://raw.githubusercontent.com/hugoalh-studio/is-string-ascii-es/${Tag}/mod.ts
  ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module with the main path `mod.ts`, it is also able to import part of the module with sub path if available, but do not import if:
>
>   - it's file path has an underscore prefix (e.g.: `_foo.ts`, `_util/bar.ts`), or
>   - it is a benchmark or test file (e.g.: `foo.bench.ts`, `foo.test.ts`), or
>   - it's symbol has an underscore prefix (e.g.: `export function _baz() {}`).
>
>   These elements are not considered part of the public API, thus no stability is guaranteed for them.
> - Although there have 3rd party services which provide enhanced, equal, or similar methods/ways to remote import the module, beware these services maybe inject unrelated elements and thus affect the security.

### 🛡️ Permissions

*This module does not require any permission.*

## 🧩 API

- ```ts
  function isStringASCII(item: string): boolean;
  ```

> **ℹ️ Note**
>
> For the prettier documentation, can visit via:
>
> - [Deno CLI `deno doc`](https://deno.land/manual/tools/documentation_generator)
> - [JSR](https://jsr.io/@hugoalh/is-string-ascii)

## ✍️ Example

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
