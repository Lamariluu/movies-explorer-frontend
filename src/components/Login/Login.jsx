import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Login.css";
import logo from "../../images/logo.svg";
import "../Hover/Hover.css";

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [emailErrorMessage, setEmailErrorMessage] = useState('Введите email');
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('Введите пароль');
  const [isInputValid, setIsInputValid] = useState(false);

  const handleEmailChange = (evt) => {
    handleBlur(evt);
    setEmail(evt.target.value);
    const pattern = /^\w+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/;
    if (!pattern.test(String(evt.target.value).toLocaleLowerCase())) {
      setEmailErrorMessage("Некорректный email");
    } else {
      setEmailErrorMessage("");
    }
  };

  const handlePasswordChange = (evt) => {
    handleBlur(evt);
    setPassword(evt.target.value);
    if (evt.target.value.length < 4 || evt.target.value.length > 8) {
      setPasswordErrorMessage("Что-то пошло не так...");
      if (!evt.target.value) {
        setPasswordErrorMessage("Пароль не может быть пустым");
      }
    } else {
      setPasswordErrorMessage("");
    }
  };

  const handleBlur = ({ target: { name } }) => {
    if (name === "email") {
      setEmailTouched(true);
    } else if (name === "password") {
      setPasswordTouched(true);
    }
  };  

  useEffect(() => {
    setIsInputValid(!(emailErrorMessage || passwordErrorMessage));
  }, [emailErrorMessage, passwordErrorMessage]);

  return (
    <main className="login">
      <section className="login__container">
        <div className="login__logo-container">
          <Link to="/">
            <img src={logo} alt="логотип" className="login__logo elements" />
          </Link>
        </div>
        <h1 className="login__title">Рады видеть!</h1>
        <form noValidate name="login__form" className="login__form" onSubmit={(evt) => evt.preventDefault()}>
          <div className="login__inputs-container">
            <div>
              <label className="login__label">E-mail</label>
              <input
                className="login__input"
                type="email"
                name="email"
                autoComplete="off"
                placeholder="Введите email"
                minLength={2}
                maxLength={30}
                pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                required={true}
                value={email}
                onChange={(evt) => handleEmailChange(evt)}
              />
              {emailTouched && emailErrorMessage && <div className="login__error">{emailErrorMessage}</div>}
            </div>
            <div>
              <label className="login__label">Пароль</label>
              <input
                className="login__input"
                type="password"
                name="password"
                autoComplete="off"
                placeholder="Введите пароль"
                minLength={4}
                maxLength={8}
                required={true}
                value={password}
                onChange={(evt) => handlePasswordChange(evt)}
              />
              {passwordTouched && passwordErrorMessage && <div className="login__error">{passwordErrorMessage}</div>}
            </div>
          </div>
          <div className="login__button-container">
            <button className="login__button buttonBlue" type="button" disabled={!isInputValid}>
              Войти
            </button>
            <Link className="login__link" to="/signup">
              Ещё не зарегистрированы? <span className="login__register linkBlue">Регистрация</span>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Login;