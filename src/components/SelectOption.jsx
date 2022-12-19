/* eslint-disable react/prop-types */

import React from 'react';

const SelectOption = ({
  list, label, selectElement, name, value,
}) => (
  <div>
    <div>
      <label className="fw-bold mb-1" htmlFor={label}>{label}</label>
    </div>
    <select value={value} className="form-select" onChange={selectElement} name={name}>
      {
        list.map(element => (
          <option key={element?.name} value={element?.name}>{element?.name}</option>
        ))
      }
    </select>
    {/* <div className="mt-1">{errors && <ErrorSection message={errors} />}</div> */}
  </div>
);

export default SelectOption;
