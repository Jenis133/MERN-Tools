import React from "react";
import { useState } from "react";

// toggle state
const HideAndShowImage3 = () => {
  let [show, setShow] = useState(true);
  // define an onClick function here
  const handleToggle = () => {
    setShow(!show);
  };

  //true //false //true
  return (
    <div className="test">
      {show ? <img src="./favicon.ico" alt="fav icon" /> : null}
      <br />
      <div className="flex-row">
        {/* call onClick function here */}
        <button onClick={handleToggle}>Show or Hide 2</button>
      </div>
    </div>
  );
};

export default HideAndShowImage3;
