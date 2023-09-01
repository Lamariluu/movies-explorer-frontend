import React, { useState, useEffect } from "react";
import "./MoviesCardList.css";
import MoviesCard from '../MoviesCard/MoviesCard';
import Preloader from '../Preloader/Preloader';
import { MOVIES_QUANTITY_PC, MOVIES_QUANTITY_MOBILE, MOVIES_QUANTITY_SMALL, MOVIES_ADD_TABLET, MOVIES_ADD_MOBILE } from '../../utils/constants';

const MoviesCardList = ({ savedMovies, cards, isSavedMovies, isLoading, isRequestError, isNotFound, onSaved, onUnsaved }) => {
  const [visibleMovies, setVisibleMovies] = useState(0);

  const visibleQuantity = () => {
    const width = window.innerWidth;
    if (width > 1250) {
      return MOVIES_QUANTITY_PC;
    //} else if (width > 1250) {
    //  return MOVIES_QUANTITY_TABLET;
    } else if (width > 760) {
      return MOVIES_QUANTITY_MOBILE;
    } else if (width <= 760) {
      return MOVIES_QUANTITY_SMALL;
    }
  };

  useEffect(() => {
    setVisibleMovies(visibleQuantity());
  }, [cards]);

  useEffect(() => {
    const handleResize = () => {
      setVisibleMovies(visibleQuantity());
    };

    const handleResizeWithDelay = () => {
      clearTimeout(resizeTimeout);
      resizeTimeout = setTimeout(handleResize, 500);
    };

    let resizeTimeout;
    window.addEventListener('resize', handleResizeWithDelay);

    return () => {
      clearTimeout(resizeTimeout);
      window.removeEventListener('resize', handleResizeWithDelay);
    };
  }, []);

  const showMore = () => {
    const width = window.innerWidth;
    if (width > 1250) {
      setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + MOVIES_ADD_TABLET);
    } else if (width > 760) {
      setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + MOVIES_ADD_MOBILE);
    } else if (width <= 760) {
      console.log(visibleMovies, cards)
      setVisibleMovies((prevVisibleMovies) => prevVisibleMovies + MOVIES_ADD_MOBILE);
    }
  };

  const getCard = (card) => {
    return savedMovies.find((savedMovie) => savedMovie.movieId === card.id);
  };

  return (
    <>
      {isLoading && <Preloader />}
      {isNotFound && <p className="nothing"> Ничего не найдено</p>}
      {isRequestError && !isLoading && (
        <>
          Во время отправки запроса возникла ошибка. Вероятно, это связано с проблемами в соединении или сервере, который сейчас недоступен. Пожалуйста, подождите некоторое время и попробуйте повторить запрос позднее.
        </>
      )}
      {!isLoading && !isRequestError && !isNotFound && (
        <>
          <ul className="movieCardList">
            {cards.slice(0, visibleMovies).map((card) => (
              <MoviesCard
                key={isSavedMovies ? card._id : card.id}
                saved={getCard(card)}
                card={card}
                isSavedMovies={isSavedMovies}
                onSaved={onSaved}
                onUnsaved={onUnsaved}
                savedMovies={savedMovies}
              />
            ))}
          </ul>
          {cards.length > visibleMovies && (
            <div type="button" className="main__button-container elements" onClick={showMore}>
              <button className="movies-button">
                Ещё
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default MoviesCardList;