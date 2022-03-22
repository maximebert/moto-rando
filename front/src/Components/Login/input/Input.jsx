import React from "react";
import PropTypes from "prop-types";

const Input = ({ value, type, name, placeholder, onChange }) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  const inputId = `field-${name}`;

  return (
    <input
      // React - state
      onChange={handleChange}
      value={value}
      // infos base
      id={inputId}
      className="input-field"
      type={type}
      placeholder={placeholder}
      name={name}
    />
  );
};

Input.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  value: "",
  type: "text",
};

export default React.memo(Input);
