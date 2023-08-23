import React from "react";
import "./FilterCheckbox.css";

function FilterCheckbox() {
  return (
    <label htmlFor="shortfilms" className="filter-checkbox">
      <input className="filter-checkbox__input" type="checkbox" id="shortfilms" />
      <span className="filter-checkbox__span elements" />
      Короткометражки
    </label>
  );
}

export default FilterCheckbox;
