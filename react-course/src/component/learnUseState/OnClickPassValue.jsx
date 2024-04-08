import React from "react";

const OnClickPassValue = () => {
  let handleClick1 = () => {
    console.log("Button is clicked");
  };
  // an arrow function that returns another function
  let handleClick2 = (a, b) => {
    return () => {
      console.log("Button is clicked");
    };
  };
  return (
    <>
      <button onClick={handleClick1}>Click me1</button>
      {/* this technique is used if we need to pass value */}
      <button onClick={handleClick2(1, 2)}>Click me2</button>
    </>
  );
};

export default OnClickPassValue;
