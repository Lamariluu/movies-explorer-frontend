import React from "react";
import "./Movies.css";
import Footer from "../Footer/Footer";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import HeaderAuth from "../HeaderAuth/HeaderAuth";

function Movies() {
  return (
    <>
      <HeaderAuth />
      <main className="main">
        <SearchForm />
        <MoviesCardList />
        <div className="main__button-container elements">
          <button type="button" className="movies-button">
            Ещё
          </button>
        </div>
      </main>
      <Footer />
    </>
  );
}

export default Movies;