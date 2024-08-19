import { useCallback, useEffect, useRef, useState } from "react";

export function useIsMounted(): () => boolean {
  // -------------------------------------------------
  // 这段代码是不行的，因为state状态更新后，useEffect的首次执行是获取不到状态更新的
  // const [isMounted, setIsMounted] = useState(false);
  // console.log("最先执行hook的代码", isMounted);

  // useEffect(() => {
  //   setIsMounted(true);
  //   console.log("重新设置了状态，页面会重新更新");

  //   return () => {
  //     console.log("我执行了哦");
  //     setIsMounted(false);
  //   };
  // }, []);

  // const checkIsMounted = useCallback(() => {
  //   console.log("checkIsMounted--被执行了-", isMounted);
  //   return isMounted;
  // }, [isMounted]);

  // return checkIsMounted;

  // --------------------------------------------------

  const isMounted = useRef(false);

  useEffect(() => {
    isMounted.current = true;

    return () => {
      isMounted.current = false;
    };
  }, []);

  const checkIsMounted = useCallback(
    () => isMounted.current,
    [isMounted.current]
  );

  return checkIsMounted;
}
