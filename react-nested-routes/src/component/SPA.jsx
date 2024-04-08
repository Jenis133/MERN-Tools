import React from "react";
import { NavLink, Route, Routes } from "react-router-dom";
import About from "./About";
import Contact from "./Contact";
import Home from "./Home";
import GetDynamicRouteParameter from "./GetDynamicRouteParameter";
import Error from "./Error";

const SPA = () => {
  return (
    <div>
      <div className="flex-row">
        <div>
          {/* http://localhost:3000/ */}
          <NavLink to={"/"}>Home</NavLink>
        </div>
        <div>
          {/* http://localhost:3000/about */}
          <NavLink to={"/about"}>About</NavLink>
        </div>
        <div>
          {/* http://localhost:3000/contact */}
          <NavLink to={"/contact"}>Contact</NavLink>
        </div>
        <div>
          {/* http://localhost:3000/a */}
          <NavLink to={"/a"}>A</NavLink>
        </div>
        <div>
          {/* http://localhost:3000/b */}
          <NavLink to={"/b"}>B</NavLink>
        </div>
        <div>
          {/* http://localhost:3000/a/a1 */}
          <NavLink to={"/a/a1"}>A1</NavLink>
        </div>
        <div>
          {/* http://localhost:3000/a/a2 */}
          <NavLink to={"/a/a2"}>A2</NavLink>
        </div>
      </div>
      {/* defining components for specific path */}
      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/about" element={<About></About>}></Route>
        <Route path="/contact" element={<Contact></Contact>}></Route>
        <Route
          path="/a"
          element={<div className="test-div">a Page</div>}
        ></Route>
        <Route
          path="/b"
          element={<div className="test-div">b Page</div>}
        ></Route>
        <Route
          path="/a/a1"
          element={<div className="test-div">a1 Page</div>}
        ></Route>
        <Route
          path="/a/a2"
          element={<div className="test-div">a2 Page</div>}
        ></Route>
        <Route
          path="/:id"
          element={<div className="test-div">Dynamic Page</div>}
        ></Route>
        <Route
          path="/:id/:id"
          element={<div className="test-div">Dynamic Page</div>}
        ></Route>
        <Route
          path="/b/:id1/id/:id2"
          element={<GetDynamicRouteParameter></GetDynamicRouteParameter>}
        ></Route>
        <Route path="*" element={<Error></Error>}></Route>
        {/*Client error*/}
      </Routes>
      {/*
          <div>
            <a href="/learnUseState/LearnUseState">Learn</a>
          </div>
          */}
    </div>
  );
};

export default SPA;
