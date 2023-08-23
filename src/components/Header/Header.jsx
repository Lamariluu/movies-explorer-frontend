import React from "react";
import "./Header.css";
import { Link, useNavigate } from "react-router-dom";
import "../Hover/Hover.css";

function Header() {
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate("/signin");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (
    <header className="header">
      <nav className="header__container">
        <Link className="header__logo elements" to="/" />

        <div className="header__button-container">
          <button type="button" className="header__button-signup link" onClick={handleSignupClick}>
            Регистрация
          </button>
          <button type="button" className="header__button-signing buttonGreen" onClick={handleSigninClick}>
            Войти
          </button>
        </div>
      </nav>
    </header>
  );
}

export default Header;