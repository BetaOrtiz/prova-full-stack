import React from 'react';

const Input = ({
  id,
  title,
  placeholder,
  value,
  name,
  onChange,
  autoFocus = false,
  type = 'text',
}) => {
  return (
    <div className="field">
      <label>{title}</label>
      <input
        id={id}
        placeholder={placeholder}
        autoFocus={autoFocus}
        type={type}
        name={name}
        value={value}
        onChange={onChange}
      />
    </div>
  );
};

export default Input;
