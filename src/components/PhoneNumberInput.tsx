import React, { ChangeEvent, useRef, useState } from 'react'
export function PhoneNumberInput() {
  const [iptVal, setIptVal] = useState('')

  const changeIptVal = (e: ChangeEvent<HTMLInputElement>) => {
    let value = e.currentTarget.value.replace(/\D/g, '')

    if (value.length > 10) {
      value = value.slice(0, 10)
    }

    if (value.length > 6) value = `${value.slice(0, 6)}-${value.slice(6)}`
    if (value.length > 3) value = `(${value.slice(0, 3)})${value.slice(3)}`

    setIptVal(value)
  }

  return (
    <input
      data-testid="phone-number-input"
      value={iptVal}
      onChange={changeIptVal}
    />
  )
}
