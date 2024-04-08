import React, { useState } from "react";

const LearnUseState = () => {
  // let age = 30;
  /* 
  define
  call

  */
  let [name, setName] = useState("Sid");
  let [age, setAge] = useState(30);
  return (
    <div className="success flex-column">
      <div>
        <span style={{ marginRight: "0.5em" }}>{name}</span>
        <span>{age}</span>
      </div>

      <button
        onClick={() => {
          setName("Arpan");
          setAge(31); // change state accordingly
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default LearnUseState;
