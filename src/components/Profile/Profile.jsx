import React, { useContext, useEffect, useState } from "react";
import "./Profile.css";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import CurrentUserContext from '../../context/CurrentUserContext';
import useForm from '../../utils/hooks/useForm';

const Profile = ({ onSignOut, onUpdateUser, isLogged, isLoading }) => {
  const currentUser = useContext(CurrentUserContext);
  const { values, errors, handleChange, isFormValid, resetForm } = useForm();
  const [isCurrentValues, setIsCurrentValues] = useState(false);

  useEffect(() => {
    if (currentUser) {
      resetForm(currentUser);
    }
  }, [currentUser, resetForm]);

  const handleSubmit = (e) => {
    e.preventDefault();
    onUpdateUser({
      name: values.name,
      email: values.email,
    });
  };

  useEffect(() => {
    setIsCurrentValues(currentUser.name === values.name);
  }, [currentUser.name, values.name]);

  return (
    <>
      <HeaderAuth isLogged={isLogged} />
      <main className="profile">
        <section className="profile__container">
          <h1 className="profile__title">Привет, {currentUser.name}!</h1>
          <form className="profile__form" onSubmit={handleSubmit} noValidate>
            <div className="profile__inputs-container">
              <div className="profile__label-container">
                <label className="profile__name">Имя</label>
                <input
                  className="profile__input"
                  name="name"
                  type="text"
                  required={true}
                  value={values.name || ''}
                  minLength={4}
                  maxLength={30}
                  //pattern="^[A-Za-zА-Яа-яЁё /s -]{4,30}"
                  onChange={handleChange}
                />
              </div>
              <span className="profile__input-label_error">{errors.name}</span>
              <div className="profile__line"></div>
              <div className="profile__label-container">
                <label className="profile__email">E-mail</label>
                <input
                  className="profile__input"
                  type="email"
                  name="email"
                  value={values.email || ''}
                  placeholder={currentUser.email}
                  pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                  required={true}
                  minLength={2}
                  maxLength={30}
                  onChange={handleChange}
                />
              </div>
              <span className="profile__input-label_error">{errors.email}</span>
            </div>
            <div className="profile__navigate">
              <button
                type="submit"
                disabled={!isFormValid || isLoading}
                className={!isFormValid || isLoading || isCurrentValues ? 'profile__button-edit_disabled' : 'profile__button-edit link'}
              >
                Редактировать
              </button>
              <button
                type="button"
                onClick={onSignOut}
                className="profile__button-text link"
              >
                Выйти из аккаунта
              </button>
            </div>
          </form>
        </section>
      </main>
    </>
  );
}

export default Profile;