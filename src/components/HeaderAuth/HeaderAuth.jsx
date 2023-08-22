import React, { useState } from "react";
import "./HeaderAuth.css";
import logo from "../../images/logo.svg";
import Navigation from "../Navigation/Navigation";
import { NavLink } from "react-router-dom";

function HeaderAuth() {
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);

  const handleToggleBurger = () => {
    setIsBurgerOpen(!isBurgerOpen);
  };

  return (
    <nav className="header-auth">
      <NavLink to="/">
        <img className="header-auth__logedin-logo elements" src={logo} alt="логотип" />
      </NavLink>

      <div>
        {isBurgerOpen && <div className="header-auth__overlay header__overlay_active" />}
        <button type="button" className="header-auth__burger" onClick={handleToggleBurger}>
          <div className={`header-auth__content ${isBurgerOpen ? "header__burger-active" : ""}`}>
            <div className="header-auth__burger-icon" />
          </div>
        </button>

        <Navigation isOpenBurger={isBurgerOpen} />
      </div>
    </nav>
  );
}

export default HeaderAuth;
