import React from "react";
import { NavLink } from "react-router-dom";

const MyNavBar = () => {
  return (
    <div>
      <NavLink
        to={"/teachers"}
        style={{ marginRight: "30px", textDecoration: "none" }}
      >
        Teacher
      </NavLink>
      <NavLink
        to={"/teachers/create"}
        style={{ marginRight: "30px", textDecoration: "none" }}
      >
        Create Teachers
      </NavLink>
    </div>
  );
};

export default MyNavBar;