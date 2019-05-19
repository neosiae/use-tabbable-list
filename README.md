# use-tabbable-list

![npm](https://img.shields.io/npm/v/use-tabbable-list.svg?style=flat-square) [![Build Status](https://img.shields.io/travis/com/neosiae/use-tabbable-list/master.svg?style=flat-square)](https://travis-ci.com/neosiae/use-tabbable-list) ![npm](https://img.shields.io/npm/dw/use-tabbable-list.svg?style=flat-square) ![npm bundle size (version)](https://img.shields.io/bundlephobia/min/use-tabbable-list/1.0.0.svg?style=flat-square) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

React hook that returns all tabbable elements within a DOM node

## Installation

> \$ npm install use-tabbable-list

## Usage

```javascript
import useTabbableList from '../src/index'

function Example() {
  const ref = useRef(null)

  const tabbableList = useTabbableList(ref)

  return (
    <div ref={ref}>
      <input />
      <button>Click!</button>
    </div>
  )
}
```

## API

### `useTabbableList(ref)`

#### ref

A reference to a DOM Node.

#### Return value

An array of all tabbable elements within the `ref` node.

## License

MIT
