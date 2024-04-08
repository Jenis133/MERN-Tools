import React from "react";
import { useParams } from "react-router-dom";

const GetDynamicRouteParameter = () => {
  const params = useParams();
  return (
    <div className="test-div">
      Get Dynamic Route Parameter
      <br />
      id1 = {params.id1} {/* http://localhost:3000/123/id/id2*/}
      <br />
      id2 = {params.id2} {/* http://localhost:3000/id1/id/456*/}
    </div>
  );
};

export default GetDynamicRouteParameter;
