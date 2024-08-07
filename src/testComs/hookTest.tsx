// src/HookTester.tsx
import React, { useState } from "react";
import useUpdateEffect from "../hooks/useUpdateEffect";

const HookTester: React.FC = () => {
  const [value, setValue] = useState(0);

  useUpdateEffect(() => {
    console.log("第一次不执行，只有value改变了才执行");
  }, [value]);

  return (
    <div>
      <p>Value: {value}</p>
      <button onClick={() => setValue((pre) => pre + 1)}>Increment</button>
      <button onClick={() => setValue((pre) => pre - 1)}>Decrement</button>
    </div>
  );
};

export default HookTester;
