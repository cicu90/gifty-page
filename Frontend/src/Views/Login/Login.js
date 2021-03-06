// Render Prop
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import './Login.scss';

import Header from "../../Component/Header/Header";


import { signInWithEmail } from "../../Firebase/Firebase";
import Logo from "../../Component/Logo/Logo";

const Login = ({isLogged}) => {
  const navigate = useNavigate();
  const [auth, setAuth] = useState([]);

  const initialValues = {
    email: "",
    password: "",
  };

  const validate = (values) => {
    const errors = {};
    if (!values.email) {
      errors.email = "Email is Required";
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
      errors.email = "Invalid email address";
    }
    if (!values.password) {
      errors.password = "Password is Required";
    }
    return errors;
  };
  async function onSubmit(values) {
    console.log(values)
    try {
      await signInWithEmail(values.email, values.password);
      //await signFirebase(values.email, values.password);
      
      setAuth([{ auth: true }]);
      isLogged = true;
      navigate("/", { replace: true });
    } catch (error) {
      console.log("error", error);
    }
  }

  return (
    <div className="login-container">
      <Formik
      initialValues = {initialValues}
      validate = {validate}
      onSubmit = {onSubmit}
      >
        <Form className="form-container">
        <Logo/>
          <label>Email:</label>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
          <label>Password:</label>
          <Field type="password" name="password" />
          <ErrorMessage name="password" component="div" />
          <button type="submit" disabled={false}>
            Submit
          </button>
        </Form>
      </Formik>
    </div>
  );
};
export default Login;
