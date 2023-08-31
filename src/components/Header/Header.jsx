import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import CurrentUserContext from "../../context/CurrentUserContext";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import "./Header.css";
import "../Hover/Hover.css";

function Header() {
  const { isLogged } = useContext(CurrentUserContext);
  const navigate = useNavigate();

  const handleSigninClick = () => {
    navigate("/signin");
  };

  const handleSignupClick = () => {
    navigate("/signup");
  };

  return (<>
    {isLogged && <HeaderAuth />}
    {!isLogged && (
      <header className="header">
        <nav className="header__container">
          <Link className="header__logo elements" to={'/'}></Link>
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
    )}
  </>);
}

export default Header;