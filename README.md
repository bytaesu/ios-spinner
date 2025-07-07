# `ios-spinner`

An iOS-style spinner for React

## Installation

```sh
npm i ios-spinner
```

## Usage

```ts
import { IosSpinner } from "ios-spinner";

<IosSpinner className="w-10 h-10">
```

## Note

Couldn’t find a good iOS-style spinner that looked nice with TailwindCSS, so I made this one.

It’s probably not a big deal in most cases, but it performs worse than a plain SVG. I tried rendering 10,000 of them for testing, and it crashed the browser 😅

So I’ll probably stick with plain SVGs myself and keep this one around for fun.
