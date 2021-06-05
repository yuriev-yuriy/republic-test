import React from "react";
import { Formik } from "formik";
import s from "./Form.module.css";

const Form = () => (
  // <div className={s.wrap}>
  <Formik
    initialValues={{ name: "", email: "", dateOfBirth: "", message: "" }}
    validate={(values) => {
      const errors = {};
      if (!values.email) {
        errors.email = "Required";
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = "Invalid email address";
      }
      return errors;
    }}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        alert(JSON.stringify(values, null, 2));
        setSubmitting(false);
      }, 400);
    }}
  >
    {({
      values,
      errors,
      touched,
      handleChange,
      handleBlur,
      handleSubmit,
      isSubmitting,
    }) => (
      <div className={s.wrap}>
        <form className={s.form} onSubmit={handleSubmit}>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            value={values.name}
            placeholder="name*"
          />
          <input
            type="email"
            name="email"
            onChange={handleChange}
            value={values.email}
            placeholder="email*"
          />
          {errors.email && touched.email && errors.email}
          <input
            className={s.box}
            type="text"
            name="dateOfBirth"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.dateOfBirth}
            placeholder="date of birth*"
            onFocus={(e) => {
              e.currentTarget.type = "date";
            }}
            max="1995-12-31"
          />
          {errors.dateOfBirth && touched.dateOfBirth && errors.dateOfBirth}
          <textarea
            className={s.textarea}
            name="message"
            type="text"
            onChange={handleChange}
            value={values.message}
            placeholder="message*"
            minLength={1}
          />
          <button className={s.btn} type="submit" disabled={isSubmitting}>
            Submit
          </button>
        </form>
      </div>
    )}
  </Formik>
);

export default Form;
