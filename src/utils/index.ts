import { useEffect, useState } from "react";

export const isTruthy: (value: unknown) => boolean = (value) =>
  value === 0 ? true : !!value;

export const cleanObject = (obj: object) => {
  const result = { ...obj };
  Object.keys(result).forEach((key) => {
    // @ts-ignore
    if (!isTruthy(result[key])) {
      // @ts-ignore
      delete result[key];
    }
  });

  return result;
};

export const useMount = (callback: () => void) => {
  useEffect(() => {
    callback();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
};

export const useArray = <T>(initialArray: T[]) => {
  const [value, setValue] = useState(initialArray);
  return {
    value,
    setValue,
    add: (item: T) => {
      setValue([...value, item]);
    },
    clear: () => {
      setValue([]);
    },
    removeIndex: (index: number) => {
      let copy = [...value];
      copy.splice(index, 1);
      setValue(copy);
    },
  };
};

// export const debounce=(func,delay)=>{
//   let timeout;
//   return (...param)=>{
//     if(timeout){
//       clearTimeout(timeout)
//     }

//     timeout=setTimeout(()=>{
//       func(...param)
//     },delay)
//   }
// }

export const useDebounce = <V>(value: V, delay?: number) => {
  const [debouncedValue, setDeboucedValue] = useState(value);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setDeboucedValue(value);
    }, delay);

    // 每次在上一个useEffect处理完以后再运行
    return () => {
      clearTimeout(timeout);
    };
  }, [value, delay]);

  return debouncedValue;
};
