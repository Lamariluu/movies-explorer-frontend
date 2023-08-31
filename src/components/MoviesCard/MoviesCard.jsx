import React from 'react';
import { convertDuration } from '../../utils/utils';
import './MoviesCard.css';

const MoviesCard = ({ saved, card, isSavedMovies, onSaved, onUnsaved, savedMovies }) => {
  const handleButtonAction = () => {
    if (saved) {
      onUnsaved(savedMovies.find((movie) => movie.movieId === card.id));
    } else {
      onSaved(card);
    }
  };

  const buttonClassName = saved ? 'movie__like-active elements' : 'movie__like elements';

  return (
    <article className="movie">
      <div className="movie__container">
        <h2 className="movie__title">{card.nameRU}</h2>
        {isSavedMovies ? (
          <button type="button" className="movie__like-active elements" onClick={handleButtonAction}></button>
        ) : (
          <button type="button" className={buttonClassName} onClick={handleButtonAction}></button>
        )}
      </div>
      <div className="movie__duration">{convertDuration(card.duration)}</div>
      <a href={card.trailerLink} target="_blank" rel="noreferrer">
        <img className="movie__poster poster" alt={card.nameRU} src={isSavedMovies ? card.image : `https://api.nomoreparties.co/${card.image.url}`} />
      </a>
    </article>
  );
}

export default MoviesCard;