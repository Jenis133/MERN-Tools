import React from "react";
import { Navigate } from "react-router-dom";

const Error = () => {
  // return <div className="test-div">404 Page not found</div>;
  return <Navigate to={"/"}></Navigate>;
};

export default Error;