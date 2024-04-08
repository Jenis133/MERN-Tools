import React from "react";
import { useState } from "react";

// toggle state
const HideAndShowImage2 = () => {
  let [show, setShow] = useState(true);
  //true //false //true
  return (
    <div className="test">
      {show ? <img src="./favicon.ico" alt="fav icon" /> : null}
      <br />
      <div className="flex-row">
        <button
          onClick={() => {
            setShow(!show);
          }}
        >
          Show or Hide
        </button>
      </div>
    </div>
  );
};

export default HideAndShowImage2;
