import React, { useState, useEffect } from "react";
import "./Movies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import { getMovies } from '../../utils/MoviesApi';
import { filterMovies, filterShortFilms } from '../../utils/utils';

const Movies = ({ isLogged, savedMovies, onUnsaved, onSaved }) => {
  const [isLoading, setIsLoading] = useState(false);
  const [initialMovies, setInitialMovies] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [isShortFilms, setIsShortFilms] = useState(false);
  const [isRequestError, setIsRequestError] = useState(false);
  const [isNotFound, setIsNotFound] = useState(false);

  const updateFilteredMovies = (movies, query, short) => {
    const moviesList = filterMovies(movies, query, short);
    setInitialMovies(moviesList);
    setFilteredMovies(short ? filterShortFilms(moviesList) : moviesList);
    localStorage.setItem('movies', JSON.stringify(moviesList));
    localStorage.setItem('allMovies', JSON.stringify(movies));
    localStorage.setItem('shorts', JSON.stringify(short));
  };

  const handleShortFilms = () => {
    setIsShortFilms(!isShortFilms);
    if (!isShortFilms) {
      if (filterShortFilms(initialMovies).length === 0) {
        setFilteredMovies(filterShortFilms(initialMovies));
      } else {
        setFilteredMovies(filterShortFilms(initialMovies));
      }
    } else {
      setFilteredMovies(initialMovies);
    }
    localStorage.setItem('shorts', !isShortFilms);
  };

  const onSearch = (query) => {
    localStorage.setItem('query', query);
    localStorage.setItem('shorts', isShortFilms);

    if (localStorage.getItem('allMovies')) {
      const movies = JSON.parse(localStorage.getItem('allMovies'));
      updateFilteredMovies(movies, query, isShortFilms);
    } else {
      setIsLoading(true);
      getMovies()
        .then((cardsData) => {
          updateFilteredMovies(cardsData, query, isShortFilms);
          setIsRequestError(false);
        })
        .catch((err) => {
          setIsRequestError(true);
          console.log(err);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  };

  useEffect(() => {
    if (localStorage.getItem('shorts') === 'true') {
      setIsShortFilms(true);
    } else {
      setIsShortFilms(false);
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('movies')) {
      const movies = JSON.parse(localStorage.getItem('movies'));
      setInitialMovies(movies);
      if (localStorage.getItem('shorts') === 'true') {
        setFilteredMovies(filterShortFilms(movies));
      } else {
        setFilteredMovies(movies);
      }
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('query')) {
      if (filteredMovies.length === 0) {
        setIsNotFound(true);
      } else {
        setIsNotFound(false);
      }
    } else {
      setIsNotFound(false);
    }
  }, [filteredMovies]);

  return (
    <>
      <HeaderAuth isLogged={isLogged} />
      <SearchForm onSearch={onSearch} onCheckbox={handleShortFilms} isShortFilms={isShortFilms} />
      <MoviesCardList
        savedMovies={savedMovies}
        cards={filteredMovies}
        isSavedMovies={false}
        isLoading={isLoading}
        isRequestError={isRequestError}
        isNotFound={isNotFound}
        onSaved={onSaved}
        onUnsaved={onUnsaved}
      />
      <Footer />
    </>
  );
};

export default Movies;