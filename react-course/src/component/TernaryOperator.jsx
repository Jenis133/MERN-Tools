import React from "react";

const TernaryOperator = () => {
  let age = "age";
  return (
    <div>
      {age < 18 ? (
        <div>Minor</div>
      ) : age > 18 && age <= 60 ? (
        <div>Adult</div>
      ) : age > 60 ? (
        <div>Old</div>
      ) : null}
    </div>
  );
};

export default TernaryOperator;
