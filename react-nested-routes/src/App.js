import React from "react";
import "./App.css";
// import SPA from "./component/SPA";
import NestedRoute from "./component/NestedRoute";
import Footer from "./component/Footer";

const App = () => {
  return (
    <div className="page-layout">
      {/* <SPA></SPA> */}
      <NestedRoute></NestedRoute>
      <Footer></Footer>
    </div>
  );
};

export default App;
