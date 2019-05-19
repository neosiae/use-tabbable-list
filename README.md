# use-tabbable-list

[![Build Status](https://img.shields.io/travis/com/neosiae/use-tabbable-list/master.svg?style=flat-square)](https://travis-ci.com/neosiae/use-tabbable-list) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

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