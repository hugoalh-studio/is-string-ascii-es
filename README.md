# Is String ASCII (ES)

[**⚖️** MIT](./LICENSE.md)

[![GitHub: hugoalh-studio/is-string-ascii-es](https://img.shields.io/github/v/release/hugoalh-studio/is-string-ascii-es?label=hugoalh-studio/is-string-ascii-es&labelColor=181717&logo=github&logoColor=ffffff&sort=semver&style=flat "GitHub: hugoalh-studio/is-string-ascii-es")](https://github.com/hugoalh-studio/is-string-ascii-es)
[![JSR: @hugoalh/is-string-ascii](https://img.shields.io/jsr/v/@hugoalh/is-string-ascii?label=JSR%20@hugoalh/is-string-ascii&labelColor=F7DF1E&logoColor=000000&style=flat "JSR: @hugoalh/is-string-ascii")](https://jsr.io/@hugoalh/is-string-ascii)
[![NPM: @hugoalh/is-string-ascii](https://img.shields.io/npm/v/@hugoalh/is-string-ascii?label=@hugoalh/is-string-ascii&labelColor=CB3837&logo=npm&logoColor=ffffff&style=flat "NPM: @hugoalh/is-string-ascii")](https://www.npmjs.com/package/@hugoalh/is-string-ascii)

An ES (JavaScript & TypeScript) module to determine whether the string is ASCII.

## 🎯 Target

- Bun >= v1.1.0
- Cloudflare Workers
- Deno >= v1.42.0
  > **🛡️ Require Permission**
  >
  > *N/A*
- NodeJS >= v16.13.0

## 🔰 Usage

### Via JSR With `node_modules`

> **🎯 Supported Target**
>
> - Bun
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - Bun
      ```sh
      bunx jsr add @hugoalh/is-string-ascii[@${Tag}]
      ```
    - NPM
      ```sh
      npx jsr add @hugoalh/is-string-ascii[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm dlx jsr add @hugoalh/is-string-ascii[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn dlx jsr add @hugoalh/is-string-ascii[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/is-string-ascii";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via JSR With Specifier

> **🎯 Supported Target**
>
> - Deno

1. Import at the script:
    ```ts
    import ... from "jsr:@hugoalh/is-string-ascii[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With `node_modules`

> **🎯 Supported Target**
>
> - Cloudflare Workers
> - NodeJS

1. Install via:
    - NPM
      ```sh
      npm install @hugoalh/is-string-ascii[@${Tag}]
      ```
    - PNPM
      ```sh
      pnpm add @hugoalh/is-string-ascii[@${Tag}]
      ```
    - Yarn
      ```sh
      yarn add @hugoalh/is-string-ascii[@${Tag}]
      ```
2. Import at the script:
    ```ts
    import ... from "@hugoalh/is-string-ascii";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via NPM With Specifier

> **🎯 Supported Target**
>
> - Bun
> - Deno

1. Import at the script:
    ```ts
    import ... from "npm:@hugoalh/is-string-ascii[@${Tag}]";
    ```

> **ℹ️ Note**
>
> - Although it is recommended to import the entire module, it is also able to import part of the module with sub path if available, please visit [file `jsr.jsonc`](./jsr.jsonc) property `exports` for available sub paths.
> - It is recommended to import the module with tag for immutability.

### Via Remote Import

> **🎯 Supported Target**
>
> - Deno

1. Import at the script:
    ```ts
    /* Via GitHub Raw (Require Tag) */
    import ... from "https://raw.githubusercontent.com/hugoalh-studio/is-string-ascii-es/${Tag}/mod.ts";
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
