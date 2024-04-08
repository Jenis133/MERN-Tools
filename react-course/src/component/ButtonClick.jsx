import React from "react";

const ButtonClick = () => {
  return (
    <div>
      <button
        onClick={() => {
          console.log("Button is Clicked");
        }}
      >
        Click Me
      </button>
    </div>
  );
};

export default ButtonClick;
