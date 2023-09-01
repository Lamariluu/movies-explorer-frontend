import React, { useState, useEffect } from "react";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import { convertDuration } from '../../utils/utils';
import { Link } from "react-router-dom";
import Preloader from '../Preloader/Preloader';
import { filterMovies, filterShortFilms } from '../../utils/utils';

const SavedMovies = ({ isLogged, savedMovies, onUnsaved, isLoading, isRequestError }) => {
  const [filteredMovies, setFilteredMovies] = useState(savedMovies);
  const [isShortFilms, setIsShortFilms] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const onSearch = (query) => {
    setSearchQuery(query);
  };

  const handleShortFilms = () => {
    setIsShortFilms(!isShortFilms);
  };

  useEffect(() => {
    const moviesList = filterMovies(savedMovies, searchQuery);
    setFilteredMovies(isShortFilms ? filterShortFilms(moviesList) : moviesList);
  }, [savedMovies, isShortFilms, searchQuery]);

  useEffect(() => {
    if (filteredMovies.length === 0) {
      setIsNotFound(true);
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <>
      <HeaderAuth isLogged={isLogged} />
      <main className="main-container">
        <SearchForm onSearch={onSearch} onCheckbox={handleShortFilms} isShortFilms={isShortFilms} />
        {isLoading && <Preloader />}
        {isNotFound && !isLoading && <p className="nothing">Ничего не найдено</p>}
        {isRequestError && !isLoading && <>Во время отправки запроса возникла ошибка. Вероятно, это связано с проблемами в соединении или сервере, который сейчас недоступен. Пожалуйста, подождите некоторое время и попробуйте повторить запрос позднее.</>}
        {!isLoading && !isRequestError && !isNotFound && (
          <section className="saveMovieList">
            <ul className="saveMovieCardList">
              {filteredMovies.map((saveMovie, index) => (
                <li className="saveMovie" key={saveMovie._id}>
                  {/*{console.log(saveMovie)}*/}
                  <div className="saveMovie__container">
                    <h2 className="saveMovie__caption">{saveMovie.nameRU}</h2>
                    <button type="button" className="saveMovie__like elements" onClick={() => onUnsaved(saveMovie)}></button>
                  </div>
                  <div className="saveMovie__duration">{convertDuration(saveMovie.duration)}</div>
                  <Link to={saveMovie.trailerLink} target="_blank">
                    <img className="saveMovie__poster poster" src={saveMovie.image} alt={`фильм ${saveMovie.nameRU}`} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        )}
      </main>
      <Footer />
    </>
  );
}

export default SavedMovies;