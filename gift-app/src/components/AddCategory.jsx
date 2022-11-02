import React from "react";
import { useState } from "react";

export const AddCategory = ({ onNewValue }) => {
  const [value, setValue] = useState("");

  // Get input value
  // const inputChange = (event {target}) => {
  const inputChange = ({ target }) => {
    setValue(target.value);
  };

  const submit = (event) => {
    // Evitar la recarga al dal enter
    event.preventDefault();
    let valueInput = value.trim();
    if (valueInput.length == 0) return;

    onNewValue(valueInput);
    setValue("");
  };

  return (
    <form onSubmit={submit}>
      <input
        className="form-control"
        placeholder="Buscar Gift"
        value={value}
        onChange={(event) => inputChange(event)}
        // onChange={inputChange}
      />
    </form>
  );
};
