import React from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

const About = () => {
  // http://localhost:3000/about?name=sid&age=25&address=gyaneshwor

  const [query] = useSearchParams();
  const navigate = useNavigate();
  return (
    <div className="test-div">
      About Page
      <br />
      <br />
      name = {query.get("name")}
      <br />
      age = {query.get("age")}
      <br />
      address = {query.get("address")}
      <br />
      <br />
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Go to home page
      </button>
      <br />
      <button
        onClick={() => {
          // navigate("/contact")
          navigate("/contact", { replace: true });
          // this property replaces the path to it's allocated path
        }}
        // onClick event in navigate is important for login portal
      >
        Go to contact page
      </button>
    </div>
  );
};

export default About;
