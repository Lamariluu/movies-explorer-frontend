import React, { useEffect, useState } from "react";
import "./Profile.css";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import { useNavigate } from "react-router-dom";

function Profile() {
  const [isUpdate, setIsUpdate] = useState(false);
  const navigate = useNavigate();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [nameTouched, setNameTouched] = useState(false);
  const [emailTouched, setEmailTouched] = useState(false);
  const [passwordTouched, setPasswordTouched] = useState(false);
  const [nameErrorMessage, setNameErrorMessage] = useState("Введите имя");
  const [emailErrorMessage, setEmailErrorMessage] = useState("Введите email");
  const [passwordErrorMessage, setPasswordErrorMessage] = useState("Введите пароль");
  const [isInputValid, setIsInputValid] = useState(false);

  const handleProfileUpdate = () => {
    console.log("")
  }

  const handleExitClick = () => {
    navigate("/")
  }

  const handleNameChange = (evt) => {
    handleBlur(evt)
    setName(evt.target.value)
    const pattern = /^[A-Za-zА-Яа-яЁё /s -]{4,}/
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

  const handleBlur = ({ target: { name } }) => {
    if (name === "name") {
      setNameTouched(true);
    } else if (name === "email") {
      setEmailTouched(true);
    } else if (name === "password") {
      setPasswordTouched(true);
    }
  };

  return (
    <>
      <HeaderAuth />
      <main className="profile">
        <section className="profile__container">
          <h1 className="profile__title">Привет, Мария!</h1>
          <form className="profile__form">
            <div className="profile__inputs-container">
              <div className="profile__label-container">
                <label className="profile__name">Имя</label>
                <input
                  className="profile__input"
                  type="text"
                  placeholder="Мария"
                  required={true}
                  value={name}
                  minLength={4}
                  maxLength={30}
                  pattern="^[A-Za-zА-Яа-яЁё /s -]{4,30}"
                  onChange={(evt) => handleNameChange(evt)}
                />
              </div>
              {(nameTouched && nameErrorMessage) && <div className="profile__input-label_error">{nameErrorMessage}</div>}
              <div className="profile__line"></div>
              <div className="profile__label-container">
                <label className="profile__email">E-mail</label>
                <input
                  className="profile__input"
                  type="email"
                  name="email"
                  value={email}
                  placeholder="pochta@yandex.ru"
                  pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                  required={true}
                  minLength={2}
                  maxLength={30}
                  onChange={(evt) => handleEmailChange(evt)} />
              </div>
              {(emailTouched && emailErrorMessage) && <div className="profile__input-label_error">{emailErrorMessage}</div>}
            </div>
            <div className="profile__navigate">
              <button className="profile__button-edit link" type="button" onClick={() => handleProfileUpdate(name, email)}
                disabled={!isUpdate}>Редактировать
              </button>
              <button type="button" onClick={handleExitClick} className="profile__button-text link">Выйти из аккаунта
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;