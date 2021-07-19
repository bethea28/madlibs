import React from 'react';
import PropTypes from 'prop-types';
import { FIELDS } from '../constants';

require('./Form.scss');

const Form = ({
  fieldOrder,
  handleInputChange,
  handleBlur,
}) => (
  <form className="form">
    <h2 className="form_header">About Me</h2>
    {fieldOrder.map((field, id) => (
      <label className="form_label" key={`${field}_field`} htmlFor="temp-id">
        <>
          <p className="form_label-header">
            {FIELDS[field]}
          </p>
          <input
            className="form_input"
            type="text"
            name={field}
            onChange={(event) => handleInputChange(field, id, event)}
            onBlur={(event) => handleBlur(field, id, event)}
          />
        </>
      </label>
    ))}
  </form>
);
Form.propTypes = {
  fieldOrder: PropTypes.arrayOf(
    PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  ).isRequired,
  handleInputChange: PropTypes.func.isRequired,
  handleBlur: PropTypes.func.isRequired,
};

export default Form;
