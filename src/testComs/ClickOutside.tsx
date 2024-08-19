import { useEffect } from 'react'
import { useClickOutside } from '../hooks/useClickOutside'

const ClikcOutsideTester = () => {
  const ref = useClickOutside(() => {
    alert('clicked outside')
  })
  return <div ref={ref}>ClikcOutsideTester</div>
}

export default ClikcOutsideTester
