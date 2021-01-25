import React, { useState, useEffect } from "react";
import { useMount } from "utils";
export const Test = () => {
  const [num, setNum] = useState(0);
  const add = () => setNum(num + 1);

  useMount(() => {
    setInterval(() => {
      console.log("num in setInterval", num);
    }, 1000);
  });

  useEffect(() => {
    return () => {
      console.log("num", num);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <button onClick={add}>Add</button>
      <p>Number:{num}</p>
    </div>
  );
};
