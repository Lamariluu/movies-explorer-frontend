import React from "react";
import "./AboutMe.css";
import Avatar from "../../../images/myPhoto.jpg";
import "../../Hover/Hover.css";

function AboutMe() {
  return (
    <section className="about-me" id="student">
      <div className="about-me__container">
        <h2 className="about-me__title">Студент</h2>
        <div className="about-me__content">
          <div className="about-me__info">
            <h3 className="about-me__name">Мария</h3>
            <p className="about-me__prof">Фронтенд-разработчик, 32 года</p>
            <p className="about-me__bio">
              Я - москвичка, окончила факультет инженерной экологии МГУПС-МИИТ.
              Обожаю гулять в разных уголках мира и заниматься активными видами спорта. Обязательно под любимую музыку!
              С 2018 года работала в сфере интернет-маркетинга, но в 2022 году сделала решительный шаг и погрузилась в мир веб-разработки.
            </p>
            <a
              className="about-me__github link"
              href="https://github.com/Lamariluu"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>
          </div>
          <img className="about-me__avatar" src={Avatar} alt="аватар студента" />
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
