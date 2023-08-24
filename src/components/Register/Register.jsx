import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Register.css";
import logo from "../../images/logo.svg";
import "../Hover/Hover.css";

function Register() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [nameTouched, setNameTouched] = useState(false)
  const [emailTouched, setEmailTouched] = useState(false)
  const [passwordTouched, setPasswordTouched] = useState(false)
  const [nameErrorMessage, setNameErrorMessage] = useState('Введите имя')
  const [emailErrorMessage, setEmailErrorMessage] = useState('Введите email')
  const [passwordErrorMessage, setPasswordErrorMessage] = useState('Введите пароль')
  const [isInputValid, setIsInputValid] = useState(false)

  const handleNameChange = (evt) => {
    handleBlur(evt)
    setName(evt.target.value)
    const pattern = /^[A-Za-zА-Яа-яЁё /s -]{2,}/
    if (!pattern.test(String(evt.target.value).toLocaleLowerCase())) {
      setNameErrorMessage("Неккоректное имя")
    } else {
      setNameErrorMessage("")
    }
  }

  const handleEmailChange = (evt) => {
    handleBlur(evt)
    setEmail(evt.target.value)
    const pattern = /^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,4}$/
    if (!pattern.test(String(evt.target.value).toLocaleLowerCase())) {
      setEmailErrorMessage("Неккоректный email")
    } else {
      setEmailErrorMessage("")
    }
  }

  const handlePasswordChange = (evt) => {
    handleBlur(evt)
    setPassword(evt.target.value)
    if (evt.target.value.length < 4 || evt.target.value.length > 8) {
      setPasswordErrorMessage("Что-то пошло не так...")
      if (!evt.target.value) {
        setPasswordErrorMessage("Пароль не может быть пустым")
      }
    } else {
      setPasswordErrorMessage("")
    }
  }

  const handleBlur = ({ target: { name } }) => {
    if (name === "name") {
      setNameTouched(true);
    } else if (name === "email") {
      setEmailTouched(true);
    } else if (name === "password") {
      setPasswordTouched(true);
    }
  };

  useEffect(() => {
    setIsInputValid(!(nameErrorMessage || emailErrorMessage || passwordErrorMessage));
  }, [nameErrorMessage, emailErrorMessage, passwordErrorMessage]);

  return (
    <main className="register">
      <section className="register__container">
        <div className="register__logo-container">
          <Link to="/">
            <img src={logo} alt="логотип" className="register__logo elements" />
          </Link>
        </div>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" noValidate name="register-form" onSubmit={(evt) => evt.preventDefault()}>
          <div className="register__inputs-container">
            <div>
              <label className="register__label">Имя</label>
              <input
                className="register__input"
                type="text"
                name="name"
                placeholder="Введите имя"
                minLength={4}
                maxLength={30}
                pattern="^[A-Za-zА-Яа-яЁё /s -]{4,30}"
                required={true}
                value={name}
                onChange={(evt) => handleNameChange(evt)} />
            </div>
            {(nameTouched && nameErrorMessage) && <div className="register__error">{nameErrorMessage}</div>}
            <div>
              <label className="register__label">E-mail</label>
              <input
                className="register__input"
                type="email"
                name="email"
                placeholder="Введите email"
                pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                required={true}
                minLength={2}
                maxLength={30}
                value={email}
                onChange={(evt) => handleEmailChange(evt)} />
            </div>
            {(emailTouched && emailErrorMessage) && <div className="register__error">{emailErrorMessage}</div>}
            <div>
              <label className="register__label" >Пароль</label>
              <input
                className="register__input"
                type="password"
                name="password"
                placeholder="Введите пароль"
                minLength={4}
                maxLength={8}
                required={true}
                value={password}
                onChange={(evt) => handlePasswordChange(evt)} />
            </div>
            {(passwordTouched && passwordErrorMessage) && <div className="register__error">{passwordErrorMessage}</div>}
          </div>
          <div className="register__button-container">
            <button className="register__button buttonBlue" type="submit" disabled={!isInputValid}>
              Зарегистрироваться
            </button>
            <Link className="register__link" to="/signin">
              Уже зарегистрированы? <span className="register__login linkBlue">Войти</span>
            </Link>
          </div>
        </form>
      </section>
    </main>
  );
}

export default Register;