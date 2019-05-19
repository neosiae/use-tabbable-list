import React, { useRef } from 'react'
import ReactDOM from 'react-dom'
import useTabbableList from '../src/index'

export default function Example() {
  const ref = useRef(null)

  const tabbableList = useTabbableList(ref)

  return (
    <div ref={ref}>
      <input />
      <button>Click!</button>
    </div>
  )
}

ReactDOM.render(<Example />, document.getElementById('root'))
