import React, { useRef } from 'react'
import useTabbableList from '../src/index'

export default function Example({ children }) {
  const ref = useRef(null)

  const tabbableList = useTabbableList(ref)

  return (
    <>
      <div ref={ref}>{children}</div>
      <div data-testid="tabbable-list">
        {tabbableList
          ? tabbableList.map((node, index) => (
              <p data-testid={`${node.nodeName}`} key={index}>
                {node.nodeName}
              </p>
            ))
          : null}
      </div>
    </>
  )
}
