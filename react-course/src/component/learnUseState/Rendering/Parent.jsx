import React from "react";
import Child from "./Child";

const Parent = () => {
  console.log("Parent will be rendered");
  return (
    <div>
      <Child></Child>
    </div>
  );
};

export default Parent;
