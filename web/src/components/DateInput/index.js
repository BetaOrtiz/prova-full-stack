import React from 'react';

const InputDate = ({ initialDate, finalDate, onChange }) => {
  return (
    <div className="field">
      <label>Início*</label>
      <input
        type="date"
        name="initialDate"
        value={initialDate}
        onChange={onChange}
      />
      <label>Fim*</label>
      <input
        type="date"
        name="finalDate"
        value={finalDate}
        onChange={onChange}
      />
    </div>
  );
};

export default InputDate;
