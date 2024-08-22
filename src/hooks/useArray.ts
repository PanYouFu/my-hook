import { useCallback, useState } from 'react'

type UseArrayActions<T> = {
  push: (item: T) => void
  removeByIndex: (index: number) => void
}

export function useArray<T>(
  initialValue: T[]
): { value: T[] } & UseArrayActions<T> {
  const [curArr, setCurArr] = useState(initialValue)

  const push = useCallback((item: T) => {
    setCurArr([...curArr, item])
  }, [])

  const removeByIndex = useCallback((index: number) => {
    setCurArr((pre) => {
      const ans = [...pre]
      ans.splice(index, 1)
      return ans
    })
  }, [])

  return {
    value: curArr,
    push,
    removeByIndex,
  }
}
