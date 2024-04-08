import React from "react";
const Form1 = () => {
  let handleSubmit = (e) => {
    e.preventDefault();
    console.log("form is submitted");
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input type="text"></input>
        <br></br>
        <input type="number"></input>
        <br></br>
        <input type="email"></input>
        <br></br>
        <input type="password"></input>
        <br></br>
        <input type="radio"></input>
        <input type="radio"></input>
        <input type="radio"></input>
        <br></br>
        <input type="checkbox"></input>
        <br></br>
        <input type="file"></input>
        <br></br>
        <textarea></textarea>
        <br></br>
        <button type="submit">Send</button>
      </form>
    </div>
  );
};
export default Form1;
