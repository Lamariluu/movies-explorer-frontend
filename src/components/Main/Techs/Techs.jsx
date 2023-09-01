import React from "react";
import "./Techs.css";

function Techs() {
  return (
    <section className="techs" id="techs">
      <div className="techs__container">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__about">
          На курсе веб-разработки мы освоили технологии, которые применили в дипломном проекте.
        </p>
        <ul className="techs__items">
          <li className="techs__item button">HTML</li>
          <li className="techs__item button">CSS</li>
          <li className="techs__item button">JS</li>
          <li className="techs__item button">React</li>
          <li className="techs__item button">Git</li>
          <li className="techs__item button">Express.js</li>
          <li className="techs__item button">mongoDB</li>
        </ul>
      </div>
    </section>
  );
}

export default Techs;