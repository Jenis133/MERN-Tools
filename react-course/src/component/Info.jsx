import React from "react";
import "../my-style.css";

const Info = ({ name, age, address }) => {
  return (
    <div className="information">
      <p>Name is {name}</p>
      <p>Age is {age}</p>
      <p>Address is {address}</p>
    </div>
  );
};

export default Info;
