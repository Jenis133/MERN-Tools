import React from "react";
import { NavLink, Outlet, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Student from "./Student";
import Error from "./Error";
const NestedRoute = () => {
    return (
        <div>
            <div className="flex-row">
                <div>
                    {/* http://localhost:3000/ */}
                    <NavLink to={"/"}>Home</NavLink>
                </div>
                <div>
                    {/* http://localhost:3000/student */}
                    <NavLink to={"/student"}>Student</NavLink>
                </div>
                <div>
                    {/* http://localhost:3000/a */}
                    <NavLink to={"/a"}>A</NavLink>
                </div>
                <div>
                    {/* http://localhost:3000/a/a1 */}
                    <NavLink to={"/a/a1"}>A1</NavLink>
                </div>
                <div>
                    {/* http://localhost:3000/a/a1/a2 */}
                    <NavLink to={"/a/a1/a2"}>A2</NavLink>
                </div>
            </div>
            {/* defining components for specific path */}
            <Routes>
                {/* localhost:3000 */}
                <Route path="/" element={<Outlet></Outlet>}>
                    {/* localhost:3000/home */}
                    <Route index element={<Home></Home>}></Route>
                    {/* localhost:3000/student */}
                    <Route path="student" element={<Student></Student>}></Route>
                    {/* localhost:3000/:id */}
                    <Route path=":id" element={<div className="test-div">Dynamic Page</div>}></Route>
                    {/* localhost:3000/404|re-direct */}
                    <Route path="*" element={<Error></Error>}></Route>
                    {/* localhost:3000/a */}
                    <Route path="a" element={<Outlet></Outlet>}>
                        <Route index element={<div className="test-div">a page</div>}></Route>
                        {/* localhost:3000/a/a1 */}
                        <Route path="a1" element={<Outlet></Outlet>}>
                            <Route index element={<div className="test-div">a1 page nested in a page</div>}></Route>
                            {/* localhost:3000/a/a2 */}
                            <Route path="a2" element={<Outlet></Outlet>}>
                                <Route index element={<div className="test-div">a2 page nested in a1 page</div>}></Route>
                            </Route>
                        </Route>
                    </Route>
                </Route>
            </Routes>
        </div>
    );
};
export default NestedRoute;
