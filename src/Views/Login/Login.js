// Render Prop
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";

import { signInWithEmail } from "../../Firebase/Firebase";

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
    <div>
      <Formik
      initialValues = {initialValues}
      validate = {validate}
      onSubmit = {onSubmit}
      >
        <Form>
          <Field type="email" name="email" />
          <ErrorMessage name="email" component="div" />
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
