import { RefObject, useEffect } from 'react'

interface RefType {
  contains(target: EventTarget | null): any
}

type EventType = (event: MouseEvent | TouchEvent) => void

export default function useOnClickOutside(
  ref: RefObject<RefType>,
  handler: EventType
) {
  useEffect(
    () => {
      const listener = (event: MouseEvent | TouchEvent) => {
        // Do nothing if clicking ref's element or descendent elements
        if (!ref.current || ref.current.contains(event.target)) {
          return
        }
        handler(event)
      }
      document.addEventListener('mousedown', listener)
      document.addEventListener('touchstart', listener)
      return () => {
        document.removeEventListener('mousedown', listener)
        document.removeEventListener('touchstart', listener)
      }
    },
    [ref, handler]
  )
}
