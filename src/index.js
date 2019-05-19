import { useState, useEffect } from 'react'
import findTabbable from './tabbable'

export default function useTabbableList(ref) {
  const [tabbable, setTabbable] = useState([])

  if (!ref) {
    console.error(
      `useTabbableList must be called with a reference to a DOM node as a first argument.`
    )
  }

  useEffect(() => {
    const node = ref.current

    if (!node) return

    setTabbable(findTabbable(node))
  }, [ref])

  return tabbable
}
