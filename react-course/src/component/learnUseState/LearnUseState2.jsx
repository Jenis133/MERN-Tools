import React from "react";
import { useState } from "react";

const LearnUseState2 = () => {
  // variable  function     initial value
  let [count1, setCount1] = useState(0);
  return (
    // React Fragment
    <>
      <div className="test">
        <p>count1 is {count1}</p>
        <div className="flex-row">
          <button
            onClick={() => {
              setCount1(count1 + 1);
            }}
          >
            Increment count1
          </button>
          <br />
          <button
            onClick={() => {
              setCount1(count1 - 1);
            }}
          >
            Decrement count1
          </button>
          <br />
          <button
            onClick={() => {
              setCount1(0);
            }}
          >
            Rest count1
          </button>
        </div>
      </div>
    </>
  );
};

export default LearnUseState2;
