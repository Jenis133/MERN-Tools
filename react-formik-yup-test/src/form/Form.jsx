// Form.js
import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import "../css/styles.css"; // Import the CSS file
import axios from 'axios'

const validationSchema = Yup.object().shape({
  name: Yup.string().required("Name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  password: Yup.string()
    .min(6, "Password must be at least 6 characters")
    .required("Password is required"),
});

const FormComponent = () => {
  const initialValues = {
    name: "",
    email: "",
    password: "",
  };

  const handleSubmit = (values) => {
    console.log(values);
    // You can perform your submission logic here
    

  return (
    <div className="form-title">
      <h1>React Form with Formik and Yup</h1>
      <div className="form-container">
        <h2>Register</h2>
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          <Form>
            <div className="form-group">
              <label htmlFor="name" className="label">
                Name:
              </label>
              <Field
                type="text"
                id="name"
                name="name"
                className="input-field"
              />
              <ErrorMessage
                name="name"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="email" className="label">
                Email:
              </label>
              <Field
                type="email"
                id="email"
                name="email"
                className="input-field"
              />
              <ErrorMessage
                name="email"
                component="div"
                className="error-message"
              />
            </div>

            <div className="form-group">
              <label htmlFor="password" className="label">
                Password:
              </label>
              <Field
                type="password"
                id="password"
                name="password"
                className="input-field"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="error-message"
              />
            </div>

            <button type="submit" className="submit-btn">
              Submit
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default FormComponent;
