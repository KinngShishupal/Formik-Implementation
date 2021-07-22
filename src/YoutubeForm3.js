//formik component
//Formik, Form, Field and ErrorMessage

//with yup valiation:  install yup
//check yup library for more rules

import React from "react";
import { ErrorMessage, Field, Form, Formik } from "formik";
import "./formcss.css";
import * as Yup from "yup";
const initialValues = {
  name: "",
  email: "",
  channel: "",
};

const onSubmit = (values) => {
  console.log(values);
};

const validationSchema = Yup.object({
  name: Yup.string().required("This Field is Mandatory"), // error message in required object
  email: Yup.string().email("Invalid Email Format").required("required field"),
  channel: Yup.string().required("required field"),
});
const YoutubeForm3 = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={onSubmit}
      validationSchema={validationSchema}
    >
      <Form>
        <label htmlFor="name">Name</label>
        <Field type="text" id="name" name="name" />

        <ErrorMessage name="name" />
        <label htmlFor="email">Email</label>
        <Field type="text" id="email" name="email" />

        <ErrorMessage name="email" />
        <label htmlFor="channel">Channel</label>
        <Field type="text" id="channel" name="channel" />

        <ErrorMessage name="channel" className="errorMsg" />

        <button type="submit">Submit</button>
      </Form>
    </Formik>
  );
};

export default YoutubeForm3;

// Form Automatically takes care of formik handlesubmit method

//Field Component bydefault maps field value to formik values

//ErrorMessage automaically maps with the schema for error messages
