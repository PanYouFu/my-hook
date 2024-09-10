import { EffectCallback, useEffect, useRef } from 'react'

export function useEffectOnce(effect: EffectCallback) {
  // your code here
  const triggered = useRef(false)

  useEffect(() => {
    if (!triggered.current) {
      return effect()
    } else {
      triggered.current = true
    }
  }, [])
}
