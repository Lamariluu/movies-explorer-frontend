import React from "react";
import "./Portfolio.css";

function Portfolio() {
  return (
    <section className="portfolio">
      <div className="portfolio__container">
        <h1 className="portfolio__title">Портфолио</h1>
        <ul className="portfolio__list">
          <li className="portfolio__project">
            <a
              className="portfolio__link link"
              href="https://lamariluu.github.io/how-to-learn/"
              target="_blank"
              rel="noreferrer"
            >
              Статичный сайт
              <span className="portfolio__link-arrow"></span>
            </a>
          </li>
          <li className="portfolio__project">
            <a
              className="portfolio__link link"
              href="https://lamariluu.github.io/russian-travel/"
              target="_blank"
              rel="noreferrer"
            >
              Адаптивный сайт
              <span className="portfolio__link-arrow"></span>
            </a>
          </li>
          <li className="portfolio__project">
            <a
              className="portfolio__link link"
              href="https://lamarilu.nomoreparties.sbs"
              target="_blank"
              rel="noreferrer"
            >
              Одностраничное приложение
              <span className="portfolio__link-arrow"></span>
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
}

export default Portfolio;