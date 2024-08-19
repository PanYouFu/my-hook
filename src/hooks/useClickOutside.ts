import React, { RefObject, useEffect, useRef } from 'react'

export function useClickOutside<T extends HTMLDivElement>(
  callback: () => void
): RefObject<T> {
  const ref = useRef<T>(null)

  const listener = (e: MouseEvent) => {
    if (e.target && ref.current) {
      if (!ref.current.contains(e.target as Node)) {
        callback()
      }
    }
  }

  useEffect(() => {
    document.addEventListener('click', listener)

    return () => document.removeEventListener('click', listener)
  }, [])

  return ref
}
