import React from "react";

const College = (props) => {
  return (
    <div className="success">
      <p>College is {props.name}</p>
      <p>Address is {props.address}</p>
      <p>Fee is {props.fee}</p>
    </div>
  );
};

export default College;
