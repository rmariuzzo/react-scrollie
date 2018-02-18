<div align=center>

[![React Scrollie - Scroll listener React component that provide scrolling info to children as render prop.](banner.svg)](https://github.com/rmariuzzo/react-scrollie)

</div>

## Features

 - **Only 5.73KB** (that's 2.53KB gzipped!).
 - **Detect scroll edges: `startX`, `endX`, `startY`, `endY`.**.
 - **Built for React 16**.

## Installation

  - `npm install react-scrollie --save`

    or 

  - `yarn add react-scrollie`

## Usage

```js
import React from 'react'
import Scrollie from 'react-scrollie'

const Demo = () => (
  <Scrollie>
    {scroll => (
      <ul>
        <li>Start X: {scroll.startX}
        <li>End X: {scroll.endX}
        <li>Start Y: {scroll.startY}
        <li>End Y: {scroll.endY}
      </ul>
    )}
  </Scrollie>
)
```

When **`<Scrollie />`** is mounted it will start to listen to scroll events and will execute the `children` render prop providing info about scroll position.

The `children` is expected to be a function.

## Documentation

 | Properties  | Type       | Default       | Description |
 | ---         | ---        | ---           | ---         |
 | `component` | `String`   | `div`         | The component to be rendered in place of a `Scrollie`. |

## Tests

TBD

## Development

To start contributing to this project, please do:

 1. Fork and clone this repo.
 2. Do your work.
 3. Create a PR.

## Releases

To release this project the following tasks should be done:

 1. Build distribution files: `yarn build`.
 2. Bump version and create tag: `npm version #.#.# -m 'Version %s.'`.
 3. Push new created tag: `git push origin --tags`.
 4. Publish: `npm publish`.

---

 <div align=center>

Made with :heart: by [Rubens Mariuzzo](https://github.com/rmariuzzo).

[MIT License](LICENSE)

 </div>
