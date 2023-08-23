import React from "react";
import "./SearchForm.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

function SearchForm() {
  return (
    <section className="searchform">
      <form className="searchform__container">
        <div className="searchform__bar">
          <input
            className="searchform__input"
            type="text"
            required
            placeholder="Фильм"
            pattern="^[A-Za-zА-Яа-яЁё /s -]{4,30}"
          />
          <button type="button" className="searchform__button buttonBlue">
            Поиск
          </button>
        </div>
        <FilterCheckbox />
      </form>
    </section>
  );
}

export default SearchForm;
