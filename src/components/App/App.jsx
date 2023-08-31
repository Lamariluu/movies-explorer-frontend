import React, { useEffect, useState } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Main from "../Main/Main";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Page404 from "../Page404/Page404";
import Notice from '../Notice/Notice';
import "./App.css";
import CurrentUserContext from '../../context/CurrentUserContext';
import * as api from '../../utils/MainApi';
import ProtectedRouteElement from '../../utils/ProtectedRouteElement.jsx';
import AuthorizedRouteElement from '../../utils/AuthorizedRouteElement.jsx';

const App = () => {
  const [isLogged, setIsLogged] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [savedMovies, setSavedMovies] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(true);
  const [isUpdated, setIsProfileUpdated] = useState(false);
  const navigate = useNavigate();
  const path = window.location.pathname;

  useEffect(() => {
    checkLoggedStatus();
  }, []);

  const checkLoggedStatus = async () => {
    const jwt = localStorage.getItem('jwt');
    if (jwt) {
      setIsLoading(true);
      try {
        const res = await api.getUserInfo();
        if (res) {
          setIsLogged(true);
          setCurrentUser(res);
          localStorage.removeItem('allMovies');
          navigate(path);
        } else {
          setIsLogged(false);
        }
        setIsSuccess(true);
      } catch (err) {
        setIsSuccess(false);
        console.log(err);
      } finally {
        setIsLoading(false);
      }
    } else {
      setIsLogged(false);
    }
  };

  useEffect(() => {
    if (isLogged) {
      setIsLoading(true);
      Promise.all([api.getUserInfo(), api.getSavedMovies()])
        .then(([profileInfo, moviesData]) => {
          setCurrentUser(profileInfo.data);
          setSavedMovies(moviesData.filter((x) => x.owner === profileInfo.data._id).reverse());
        })
        .catch((err) => {
          setIsSuccess(false);
          console.log(err);
        })
        .finally(() => setIsLoading(false));
    }
  }, [isLogged]);

  const handleRegister = (name, email, password) => {
    api
      .register(name, email, password)
      .then(() => {
        handleLogin(email, password);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      });
  };

  const handleLogin = (email, password) => {
    setIsLoading(true);
    api
      .authorize(email, password)
      .then((res) => {
        if (res) {
          localStorage.setItem('jwt', res.token);
          setIsLogged(true);
          navigate('/movies');
        }
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  };

  const updateUserProfile = (newProfileData) => {
    setIsLoading(true);
    api
      .updateUserProfile(newProfileData)
      .then(({ data }) => {
        setIsProfileUpdated(true);
        setCurrentUser(data);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }

  const handleUnauthorized = (err) => {
    if (err === 'Error: 401') {
      handleSignOut();
    }
  }

  const handleSignOut = () => {
    setIsLogged(false);
    localStorage.removeItem('jwt');
    localStorage.removeItem('movies');
    localStorage.removeItem('query');
    localStorage.removeItem('shorts');
    localStorage.removeItem('allMovies');
    navigate('/');
  };

  const handleSaved = (movie) => {
    api
      .saveMovie({
        movieData: {
          movieId: movie.id,
          nameRU: movie.nameRU,
          nameEN: movie.nameEN,
          director: movie.director,
          country: movie.country,
          year: movie.year,
          duration: movie.duration,
          description: movie.description,
          trailerLink: movie.trailerLink,
          image: `https://api.nomoreparties.co${movie.image.url}`,
          thumbnail: `https://api.nomoreparties.co${movie.image.url}`,
        },
      })
      .then((newMovie) => {
        setSavedMovies([newMovie, ...savedMovies]);
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      });
  }

  const handleUnsaved = (movie) => {
    api
      .deleteMovie({ id: movie._id })
      .then(() => {
        setSavedMovies((state) => state.filter((item) => item._id !== movie._id));
      })
      .catch((err) => {
        setIsSuccess(false);
        console.log(err);
        handleUnauthorized(err);
      });
  }

  const closeNotice = () => {
    setIsSuccess(true);
    setIsProfileUpdated(false);
  }

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="app">
        <div className="app__container">
          <Routes>
            <Route path="/" element={<Main isLogged={isLogged} />} />
            <Route path="/movies" element={<ProtectedRouteElement component={Movies} isLogged={isLogged} savedMovies={savedMovies} onUnsaved={handleUnsaved} onSaved={handleSaved} />} />
            <Route path="/saved-movies" element={<ProtectedRouteElement component={SavedMovies} isLogged={isLogged} savedMovies={savedMovies} onUnsaved={handleUnsaved} />} />
            <Route path="/profile" element={<ProtectedRouteElement component={Profile} onSignOut={handleSignOut} onUpdateUser={updateUserProfile} isLogged={isLogged} isLoading={isLoading} />} />
            <Route path="/signin" element={<AuthorizedRouteElement component={Login} isLogged={isLogged} onAuthorize={handleLogin} isLoading={isLoading} />} />
            <Route path="/signup" element={<AuthorizedRouteElement component={Register} isLogged={isLogged} onRegister={handleRegister} isLoading={isLoading} />} />
            <Route path="*" element={<Page404 />} />
          </Routes>
          <Notice isSuccess={isSuccess} onClose={closeNotice} />
          <Notice isSuccess={!isUpdated} isUpdated={isUpdated} onClose={closeNotice} />
        </div>
      </div>
    </CurrentUserContext.Provider>
  );
};

export default App;
