import { Ref, useState } from 'react'
import { useFocus } from '../hooks/useFocus'

const FocusTester = () => {
  const [ref, isFocused] = useFocus<HTMLInputElement | HTMLTextAreaElement>()
  const [refTarget, setRefTarget] = useState(0)

  const changeRef = () => {
    setRefTarget((target) => (target + 1) % 2)
  }

  return (
    <>
      <div onClick={changeRef}>切换 ref ，当前ref: {refTarget}</div>
      <div>
        <p>我是0</p>
        <input ref={refTarget === 0 ? (ref as Ref<HTMLInputElement>) : null} />
      </div>
      <div>
        <p>我是1</p>
        <textarea
          ref={refTarget === 1 ? (ref as Ref<HTMLTextAreaElement>) : null}
        />
      </div>
      {isFocused && <p>focused {refTarget}</p>}
    </>
  )
}

export default FocusTester
