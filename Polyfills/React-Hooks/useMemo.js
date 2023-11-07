import { useRef, useEffect } from "react";

export const useMyMemo = (callback, deps) => {
  // define a state which holds the value through out the
  // component life cycle (cached state)

  const memoizedState = useRef(null);

  // compare if the dependancy prop changed
  // and execute the fucntion if prop changed
  if (!memoizedState.current || !isEqual(memoizedState.current.deps, deps)) {
    memoizedState.current = {
      value: callback(),
      deps,
    };
  }

  // cleanup of state on component unmount
  useEffect(() => {
    return () => (memoizedState.current = null);
  }, []);

  // return memoized state if any
  return memoizedState.current.value;
};

const isEqual = (prevVal, newVal) => {
  if (prevVal === null) return false;
  if (prevVal.length !== newVal.length) return false;

  for (let i = 0; i < prevVal.length; i++) {
    if (prevVal[i] !== newVal[i]) return false;
  }

  return true;
};
