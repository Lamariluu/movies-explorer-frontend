import React from "react";
import { Link } from "react-scroll";
import "./NavTab.css";

function NavTab() {
  return (
    <nav className='navtab'>
      <Link to={'project'} className='navtab__button button'>О проекте</Link>
      <Link to={'techs'} className='navtab__button button'>Технологии</Link>
      <Link to={'student'} className='navtab__button button'>Студент</Link>
    </nav>
  );
}

export default NavTab;
