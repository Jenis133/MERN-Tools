import React from "react";

const Style = () => {
  return (
    <div>
      <p
        style={{
          color: "#fff",
          padding: "1em",
          background: "#333",
          borderBottom: "1px solid whitesmoke",
        }}
      >
        Paragraph 1
      </p>
      <p className="test">Paragraph 2</p>
    </div>
  );
};

export default Style;
