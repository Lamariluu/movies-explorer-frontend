import React from "react";
import "./Main.css";
import Header from "../Header/Header";
import HeaderAuth from "../HeaderAuth/HeaderAuth";
import Promo from "./Promo/Promo";
import AboutProject from "./AboutProject/AboutProject";
import Techs from "./Techs/Techs";
import AboutMe from "./AboutMe/AboutMe";
import Portfolio from "./Portfolio/Portfolio";
import Footer from "../Footer/Footer";

const Main = ({ isLogged }) => {
  return (
    <div className="main-content">
      {isLogged ? <HeaderAuth /> : <Header />}
      <main className="main-sections">
        <Promo />
        <AboutProject />
        <Techs />
        <AboutMe />
        <Portfolio />
      </main>
      <Footer />
    </div>
  );
}

export default Main;
