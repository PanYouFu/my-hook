import React, { EffectCallback, DependencyList, useRef } from "react";

// Implement useUpdateEffect() that it works the same as useEffect() except that it skips running the callback on first render.

function useUpdateEffect(effect: EffectCallback, deps?: DependencyList) {
  const isFirst = useRef(true);

  React.useEffect(() => {
    if (isFirst.current) {
      isFirst.current = false;
    } else {
      // cleanup function should be respected
      return effect();
    }
  }, deps);
}

export default useUpdateEffect;
