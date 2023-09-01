import React, { useState, useEffect } from "react";
import "./SearchForm.css"
import FilterCheckbox from "../FilterCheckbox/FilterCheckbox";

const SearchForm = ({ onSearch, onCheckbox, isShortFilms }) => {
  const [query, setQuery] = useState('');
  const [isQueryError, setIsQueryError] = useState(false);
  const path = window.location.pathname;

  const handleChange = (e) => {
    setQuery(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (query.trim().length === 0) {
      setIsQueryError(true);
    } else {
      setIsQueryError(false);
      onSearch(query);
    }
  };

  useEffect(() => {
    if (path === '/movies' && localStorage.getItem('query')) {
      const localQuery = localStorage.getItem('query');
      setQuery(localQuery);
    }
  }, [path]);

  return (
    <section className="searchform">
      <form className="searchform__container" onSubmit={handleSubmit}>
        <div className="searchform__bar">
          <input
            formNoValidate
            name="query"
            value={query || ''}
            onChange={handleChange}
            className="searchform__input"
            type="text"
            //required
            placeholder="Фильм"
          //pattern="^[A-Za-zА-Яа-яЁё /s -]{4,30}"
          />
          <button type="submit" className="searchform__button buttonBlue">
            Поиск
          </button>
        </div>
        {isQueryError && <span className="auth__error">Нужно ввести ключевое слово</span>}
        <FilterCheckbox onCheckbox={onCheckbox} isShortFilms={isShortFilms} />
      </form>
    </section>
  );
};
export default SearchForm;
