// 需求：监听对应元素的聚焦失焦事件
// 每次给ref赋值的时候，同时注册它的监听事件。
// 实现：1. 使用useRef()绑定元素；2. 通过useCallback来包装 引用类型 的值
// 为什么需要useRef，因为ref的值不会因为re-render而变化，这样可以获取到之前绑定的元素，移除它的失焦聚焦事件。
// 为什么需要 useCallback。useCallback 会缓存回调函数，并且只有在其依赖项发生变化时才会重新创建这个函数。如果不使用 useCallback，每次组件渲染时，都会创建一个新的 callbackRef 函数引用。
import { Ref, useCallback, useRef, useState } from 'react'

export function useFocus<T extends HTMLElement>(): [Ref<T>, boolean] {
  const [focused, setFocused] = useState(false)
  const ref = useRef<T>()

  const onFocus = () => {
    setFocused(true)
  }
  const onBlur = () => {
    setFocused(false)
  }

  console.log('useFocus---')

  const callbackRef = useCallback((node: T) => {
    console.log('callbackRef的第一参数被调用')
    console.log('ref.current----', ref.current)
    console.log('node----', node)
    if (ref.current) {
      ref.current.removeEventListener('focus', onFocus)
      ref.current.removeEventListener('blur', onBlur)
    }
    ref.current = node
    if (node) {
      ref.current.addEventListener('focus', onFocus)
      ref.current.addEventListener('blur', onBlur)
    }
  }, [])

  return [callbackRef, focused]
}
