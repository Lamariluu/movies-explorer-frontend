import React from "react";
import "./NavTab.css";

function NavTab() {
  return (



    <ul className="navtab">

      <li className="navtab__button">
        <a href="/#project" className="navtab__button button">О проекте</a>
      </li>
      <li className="navtab__button">
        <a href="/#techs" className="navtab__button button">Технологии</a>
      </li>
      <li className="navtab__button">
        <a href="/#student" className="navtab__button button">Студент</a>
      </li>

    </ul>
  );
}

export default NavTab;
