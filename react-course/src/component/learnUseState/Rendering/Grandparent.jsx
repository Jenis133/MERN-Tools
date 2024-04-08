import React from "react";
import Parent from "./Parent";
import { useState } from "react";

const Grandparent = () => {
  console.log("Grandparent will be rendered");
  let [count1, setCount1] = useState(0);
  return (
    <div>
      <p>count1 is {count1}</p>
      <button
        onClick={() => {
          setCount1(count1 + 1);
        }}
      >
        Increment count1
      </button>
      <Parent></Parent>
    </div>
  );
};

export default Grandparent;
