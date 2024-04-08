import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ReadAllTeachers from "./teacher/ReadAllTeachers";
import CreateTeacher from "./teacher/CreateTeacher";

const MyRoutes = () => {
  return (
    <div>
      {/* defining components for specific path */}
      <Routes>
        {/* localhost:3000 */}
        <Route
          path="/"
          element={
            <div>
              <Outlet></Outlet>
            </div>
          }
        >
          {/* localhost:3000/home */}
          <Route index element={<div>This is landing page</div>}></Route>
          {/* localhost:3000/teachers */}
          <Route
            path="teachers"
            element={
              <div>
                <Outlet></Outlet>
              </div>
            }
          >
            <Route index element={<ReadAllTeachers></ReadAllTeachers>}></Route>

            <Route
              path="create"
              element={
                <div>
                  <Outlet></Outlet>
                </div>
              }
            >
            <Route index element={<CreateTeacher></CreateTeacher>}></Route></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default MyRoutes;
