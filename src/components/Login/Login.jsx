import React from "react";
import { Link } from "react-router-dom";
import useForm from '../../utils/hooks/useForm';
import "./Login.css";
import logo from "../../images/logo.svg";
import "../Hover/Hover.css";

const Login = ({ onAuthorize, isLoading }) => {
  const { values, errors, handleChange, isFormValid } = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    onAuthorize(values['login-email'], values['login-password']);
  };

  return (
    <main className="login">
      <section className="login__container">
        <div className="login__logo-container">
          <Link to="/">
            <img src={logo} alt="логотип" className="login__logo elements" />
          </Link>
        </div>
        <h1 className="login__title">Рады видеть!</h1>
        <form noValidate name="login" className="login__form" onSubmit={handleSubmit}>
          <div className="login__inputs-container">
            <div>
              <label className="login__label">E-mail</label>
              <input
                className={`login__input ${errors['login-email'] ? 'login__error' : ''}`}
                type="email"
                name="login-email"
                autoComplete="off"
                placeholder="Введите email"
                minLength={2}
                maxLength={30}
                pattern="^[\w]+@[a-zA-Z]+\.[a-zA-Z]{2,30}$"
                required={true}
                value={values['login-email'] || ''}
                onChange={handleChange}
              />
              {errors['login-email'] && <span className="login__error">{errors['login-email']}</span>}
            </div>
            <div>
              <label className="login__label">Пароль</label>
              <input
                className={`login__input ${errors['login-password'] ? 'login__error' : ''}`}
                type="password"
                name="login-password"
                autoComplete="off"
                placeholder="Введите пароль"
                minLength={4}
                maxLength={8}
                required={true}
                value={values['login-password'] || ''}
                onChange={handleChange}
              />
              {errors['login-password'] && <span className="login__error">{errors['login-password']}</span>}
            </div>
          </div>
          <div className="login__button-container">
            <button className="login__button buttonBlue" type="submit" disabled={!isFormValid || isLoading}>
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