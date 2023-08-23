import React from "react";
import "./MoviesCardList.css";
import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.png";
import pic4 from "../../images/pic4.png";
import pic5 from "../../images/pic5.png";
import pic6 from "../../images/pic6.png";
import pic7 from "../../images/pic7.png";
import pic8 from "../../images/pic8.png";
import pic9 from "../../images/pic9.png";
import pic10 from "../../images/pic10.png";
import pic11 from "../../images/pic11.png";
import pic12 from "../../images/pic12.png";
import { Link } from "react-router-dom";

const movies = [
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic1 },
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic2 },
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic3 },
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic4 },
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic5 },
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic6 },
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic7 },
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic8 },
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic9 },
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic10 },
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic11 },
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic12 },
];

function MoviesCardList() {
  return (
    <section className="movieCardList">
      {movies.map((movie, index) => (
        <ul className="movie" key={index}>
          <li className="movie__container">
            <h3 className="movie__title">{movie.title}</h3>
            <button type="button" className="movie__like-active elements"></button>
          </li>
          <li className="movie__duration">{movie.duration}</li>
          <Link to="https://www.youtube.com/@kinopoisk" target="_blank">
            <img className="movie__poster poster" src={movie.img} alt={`фильм ${movie.title}`} />
          </Link>
        </ul>
      ))}
    </section>
  );
}

export default MoviesCardList;