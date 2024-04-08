import React from "react";
import { useState } from "react";

// show / hide / reset state
const HideAndShowImage = () => {
  let [show, setShow] = useState(true);
  return (
    <div className="test">
      {show ? <img src="./favicon.ico" alt="fav icon" /> : null}
      <br />
      <div className="flex-row">
        <button
          onClick={() => {
            setShow(true);
          }}
        >
          Show
        </button>
        <br />
        <button
          onClick={() => {
            setShow(false);
          }}
        >
          Hide
        </button>
      </div>
    </div>
  );
};

export default HideAndShowImage;
