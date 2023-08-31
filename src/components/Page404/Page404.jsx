import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Page404.css";

function Page404() {
  const navigate = useNavigate();

  const handleClick = (e) => {
    e.preventDefault();
    navigate(-2);
  };

  return (
    <section className="page404">
      <h1 className="page404__error">404</h1>
      <p className="page404__text">Страница не найдена</p>
      <Link to="/" className="page404__button link" onClick={handleClick}>
        Назад
      </Link>
    </section>
  );
}

export default Page404;
