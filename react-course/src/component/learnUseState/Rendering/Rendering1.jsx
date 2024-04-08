import React, { useState } from "react";

const Rendering1 = () => {
  // why useState

  console.log("Hello");

  let [count1, setCount1] = useState(0);

  let [count2, setCount2] = useState(100);

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
      <br />
      <p>count2 is {count2}</p>
      <button
        onClick={() => {
          setCount2(count2 + 2);
        }}
      >
        Increment count2
      </button>
    </div>
  );
};

export default Rendering1;

/* 
    This is why we use useState:
        When state variable changes, a component will render (execute) changes

        A component will only render if state variable changes
        If it does not then the component will not render

        When a component is render by count1 state variable (the count1 variable will be updated)
        (other state variable such as count1 will retain it's previous value)
*/
