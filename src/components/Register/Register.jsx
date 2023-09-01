import React from "react";
import { Link } from "react-router-dom";
import useForm from '../../utils/hooks/useForm';
import "./Register.css";
import logo from "../../images/logo.svg";
import "../Hover/Hover.css";

const Register = ({ onRegister, isLoading }) => {
  const { values, errors, handleChange, isFormValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    onRegister(values.name, values.email, values.password);
  };

  return (
    <main className="register">
      <section className="register__container">
        <div className="register__logo-container">
          <Link to="/">
            <img src={logo} alt="логотип" className="register__logo elements" />
          </Link>
        </div>
        <h1 className="register__title">Добро пожаловать!</h1>
        <form className="register__form" noValidate name="register" onSubmit={handleSubmit}>
          <div className="register__inputs-container">
            <div>
              <label className="register__label">Имя</label>
              <input
                className={`register__input ${errors.name ? 'register__error' : ''}`}
                type="text"
                name="name"
                placeholder="Введите имя"
                minLength={4}
                maxLength={30}
                //pattern="^[A-Za-zА-Яа-яЁё /s -]{4,30}"
                required={true}
                value={values.name || ''}
                onChange={handleChange} />
            </div>
            {errors.name && <span className="register__error">{errors.name}</span>}
            <div>
              <label className="register__label">E-mail</label>
              <input
                className={`register__input ${errors.email ? 'register__error' : ''}`}
                type="email"
                name="email"
                placeholder="Введите email"
                pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                required={true}
                minLength={2}
                maxLength={30}
                value={values.email || ''}
                onChange={handleChange} />
            </div>
            {errors.email && <span className="register__error">{errors.email}</span>}
            <div>
              <label className="register__label" >Пароль</label>
              <input
                className={`register__input ${errors.password ? 'register__error' : ''}`}
                type="password"
                name="password"
                placeholder="Введите пароль"
                minLength={4}
                maxLength={8}
                required={true}
                value={values.password || ''}
                onChange={handleChange} />
            </div>
            {errors.password && <span className="register__error">{errors.password}</span>}
          </div>
          <div className="register__button-container">
            <button className="register__button buttonBlue" type="submit" disabled={!isFormValid || isLoading}>
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