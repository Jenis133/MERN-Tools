import React, { useState } from "react";

const Practice = () => {
  let [props, setProps] = useState("");
  let firstName = "Sid";
  let lastName = "Sherpa";
  let address = "Kathmandu";
  let data = {
    firstName: firstName,
    lastName: lastName,
    address: address,
  };
  console.log(data);
  return (
    <>
      <div>Practice</div>
    </>
  );
};

export default Practice;
