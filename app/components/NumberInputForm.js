import React from 'react';
import { withFormik } from 'formik';

export function NumberInput({
  values,
  touched,
  errors,
  handleChange,
  handleBlur,
  handleSubmit
}) {
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <input
          type="number"
          onChange={handleChange}
          onBlur={handleBlur}
          value={values.inputNumber}
          name="inputNumber"
        />
      </div>
      {errors.inputNumber && touched.inputNumber && (
        <div id="feedback">{errors.inputNumber}</div>
      )}
      <div>
        <button type="submit">Push number to stack</button>
      </div>
    </form>
  );
}

export default withFormik({
  mapPropsToValues: () => ({ inputNumber: '' }),
  validate: values => {
    const errors = {};

    if (!values.inputNumber) {
      errors.inputNumber = 'Required';
    }

    return errors;
  },
  handleSubmit: (values, { props }) => {
    props.onSubmit(values.inputNumber);
  }
})(NumberInput);
