import React from "react";

const EffectOfData = () => {
  let name = "Sid";
  let age = 29;
  let isMarried = false;
  let tags = [<div>Hello 1</div>, <div>Hello 2</div>, <div>Hello 3</div>];
  let info = { objName: "Object Name", objAge: 30 };
  let nu = null;
  let und = undefined;
  return (
    <div className="info">
      <p>{name}</p>
      <p>{age}</p>
      <p>{isMarried}</p>
      <p>{tags}</p>
      {/* <p>{info}</p> */}
      <p>{info.objName}</p>
      <p>{info.objAge}</p>
      {nu}
      {und}
    </div>
  );
};

export default EffectOfData;

/* 
Boolean are not displayed in the browser
When array is placed in the browser => It places element one by one (note ([]) and (,) are not written in browser)
We cannot place object in browser (Error: Object is not valid as react child)
 */
