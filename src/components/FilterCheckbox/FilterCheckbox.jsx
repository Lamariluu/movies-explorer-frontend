import React from "react";
import "./FilterCheckbox.css";

const FilterCheckbox = ({ onCheckbox, isShortFilms }) => {
  return (
      <label htmlFor="shortfilms" className="filter-checkbox">
        <input className="filter-checkbox__input" type="checkbox" id="shortfilms" checked={isShortFilms} onChange={onCheckbox} />
        <span className="filter-checkbox__span elements" />
        Короткометражки
      </label>
  );
}

export default FilterCheckbox;
