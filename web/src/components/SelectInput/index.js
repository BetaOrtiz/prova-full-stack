import React from 'react';

const SelectInput = ({ title, onChange, optionsList = [] }) => {
  return (
    <div className="field">
      <label>{title}</label>
      <select name="category" onChange={onChange}>
        <option value="0">Selecione uma Categoria</option>
        {optionsList.map((option) => (
          <option key={option.id} value={option.id}>
            {option.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectInput;
