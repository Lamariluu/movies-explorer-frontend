import React from "react";
import "./AboutProject.css";

function AboutProject() {
  return (
    <section className="about-project" id="project">
      <div className="about-project__container">
        <h2 className="about-project__title">О проекте</h2>
        <div className="diploma">
          <div className="diploma-container">
            <h3 className="diploma-container__title">Дипломный проект включал 5 этапов</h3>
            <p className="diploma-container__subtitle">Составление плана, работа над бэкендом, вёрстку, добавление функциональности и финальные доработки.</p>
          </div>
          <div className="diploma-container">
            <h3 className="diploma-container__title">На выполнение диплома ушло 5 недель</h3>
            <p className="diploma-container__subtitle">У каждого этапа был мягкий и жёсткий дедлайн, которые нужно было соблюдать, чтобы успешно защититься.</p>
          </div>
        </div>
        <div className="diploma-phase">
          <div className="diploma-phase__backend">
            <p className="diploma-phase__time diploma-phase__time-back">1 неделя</p>
            <p className="diploma-phase__title">Back-end</p>
          </div>
          <div className="diploma-phase__frontend">
            <p className="diploma-phase__time diploma-phase__time-front">4 недели</p>
            <p className="diploma-phase__title">Front-end</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutProject;