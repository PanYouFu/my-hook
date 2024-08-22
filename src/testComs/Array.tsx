import { useArray } from '../hooks/useArray'

const ClikcOutsideTester = () => {
  const { value, push, removeByIndex } = useArray([1, 2, 3])

  return (
    <div>
      {value}
      <div onClick={() => push(9)}>push</div>
      <div onClick={() => removeByIndex(1)}>removeByIndex</div>
    </div>
  )
}

export default ClikcOutsideTester
