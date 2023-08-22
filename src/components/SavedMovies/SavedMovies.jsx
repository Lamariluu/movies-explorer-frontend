import React from "react";
import "./SavedMovies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../Movies/SearchForm/SearchForm";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import { Link } from "react-router-dom";
import pic1 from "../../images/pic1.png";
import pic2 from "../../images/pic2.png";
import pic3 from "../../images/pic3.png";

const savedMovies = [
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic1 },
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic2 },
  { title: "33 слова о дизайне", duration: "1ч 47м", img: pic3 },
];

function SavedMovies() {
  return (
    <>
      <HeaderAuth />
      <main className="main-container">
        <SearchForm />
        <section className="saveMovieCardList">
      {savedMovies.map((saveMovie, index) => (
        <ul className="saveMovie" key={index}>
          <li className="saveMovie__container">
            <h3 className="saveMovie__caption">{saveMovie.title}</h3>
            <button type="button" className="saveMovie__like elements"></button>
          </li>
          <li className="saveMovie__duration">{saveMovie.duration}</li>
          <Link to="https://www.youtube.com/@kinopoisk" target="_blank">
            <img className="saveMovie__poster poster" src={saveMovie.img} alt={`фильм ${saveMovie.title}`} />
          </Link>
        </ul>
      ))}
    </section>
    </main>
      <Footer />
    </>
  );
}

export default SavedMovies;