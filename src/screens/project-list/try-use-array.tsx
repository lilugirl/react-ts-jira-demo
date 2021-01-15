import React from "react";
import { useMount, useArray } from "utils";

export const TsReactTest = () => {
  const persons: { name: string; age: number }[] = [
    {
      name: "jack",
      age: 23,
    },
    {
      name: "ma",
      age: 45,
    },
  ];
  const { value, clear, removeIndex, add } = useArray(persons);
  console.log("value", value);

  useMount(() => {});
  return (
    <div>
      <button onClick={() => add({ name: "john", age: 34 })}>Add</button>
      <button onClick={() => removeIndex(0)}>remove first element</button>
      <button onClick={() => clear()}>Clear</button>
      {value.map((person, i) => {
        return (
          <div key={i}>
            <span>{i}</span>
            <span>{person.name}</span>
            <span>{person.age}</span>
          </div>
        );
      })}
    </div>
  );
};
