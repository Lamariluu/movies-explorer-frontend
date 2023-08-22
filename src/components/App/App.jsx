import React from "react";
import { Routes, Route } from "react-router-dom";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Page404 from "../Page404/Page404";
import "./App.css";

const App = () => {
  const isLogged = false;

  return (
    <div className="app">
      <Routes>
        <Route path="/" element={<Main isLogged={isLogged} />} />
        <Route path="/movies" element={<Movies isLogged={isLogged} />} />
        <Route path="/saved-movies" element={<SavedMovies isLogged={isLogged} />} />
        <Route path="/profile" element={<Profile isLogged={isLogged} />} />
        <Route path="/signin" element={<Login />} />
        <Route path="/signup" element={<Register />} />
        <Route path="*" element={<Page404 />} />
      </Routes>
    </div>
  );
};

export default App;
