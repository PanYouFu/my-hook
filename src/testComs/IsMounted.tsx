import { useEffect } from 'react'
import { useIsMounted } from '../hooks/useIsMounted'

const HookTester = () => {
  const isMountedFn = useIsMounted()
  useEffect(() => {
    console.log('第一次渲染完成', isMountedFn())
  }, [isMountedFn])

  return <div>BFE.dev</div>
}

export default HookTester
