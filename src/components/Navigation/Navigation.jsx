import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navigation.css';
import '../Hover/Hover.css';

function Navigation({ isOpenBurger }) {
  return (
    <div className={`navigation ${isOpenBurger ? 'navigation_active' : ''}`}>
      <Link to="/" className="navigation__link navigation__link-home link">
        Главная
      </Link>
      <nav className="navigation__list">
        <li>
          <NavLink to="/movies" className="navigation__link link" activeClassName="active">
            Фильмы
          </NavLink>
        </li>
        <li>
          <NavLink to="/saved-movies" className="navigation__link link" activeClassName="active">
            Сохранённые фильмы
          </NavLink>
        </li>
      </nav>
      <Link to="/profile" className="navigation__profile link">
        Аккаунт
      </Link>
    </div>
  );
}

export default Navigation;