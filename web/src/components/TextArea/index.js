import React from 'react';

const TextArea = ({
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
      <textarea
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

export default TextArea;
