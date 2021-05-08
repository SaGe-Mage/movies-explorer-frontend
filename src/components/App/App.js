import React from "react";
import {Redirect, Route, Switch, useHistory} from 'react-router-dom';
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login"
import Error from "../Error/Error";
import Navigation from "../Navigation/Navigation";
import Popup from "../Popup/Popup";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";
import "./App.css";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import mainApi from "../../utils/MainApi";
import moviesApi from "../../utils/MoviesApi";

import confirm from "../../images/ok.png";
import noConfirm from "../../images/err.png";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [navigate, setNavigate] = React.useState(false);
  const [isPopupOpen, setIsPopupOpen] = React.useState(false);
  const [message, setMessage] = React.useState({
    loading: true,
    iconPath: '',
    text: ''
  });
  const [movies, setMovies] = React.useState([]);
  const [myMovies, setMyMovies] = React.useState([]);

  function toggleBurg() {
    setNavigate(!navigate);
  }

  const history = useHistory();

  function handlePopupOpen() {
    setIsPopupOpen(true);
    document.addEventListener('click', () => {
      setIsPopupOpen(false);
      setMessage({
        loading: true,
        iconPath: '',
        text: ''
      })
    });
  }

  function handleRegister(data) {
    mainApi.register(data)
      .then((data) => initData(data))
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(() => {
        setMessage({
          iconPath: noConfirm,
          text: 'Произошла ошибка!'
        })
        handlePopupOpen();
      });
  }

  function handleLogin(data) {
    mainApi.login(data)
      .then((data) => initData(data))
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(() => {
        setMessage({
          iconPath: noConfirm,
          text: 'Произошла ошибка!'
        })
        handlePopupOpen();
      });
  }

  function initData(myInfo) {
    return Promise.all([moviesApi.getMovies(), mainApi.getMovies()])
      .then(([movies, myMovies]) => {
        setCurrentUser(myInfo);
        setMovies(movies);
        setMyMovies(myMovies);
        setLoggedIn(true);
      })
      .catch(err => console.log(err));
  }

  function handleUpdateProfile(data) {
    handlePopupOpen();
    mainApi.updateProfile(data)
      .then(() => {
        setMessage({
          iconPath: confirm,
          text: 'Информация успешно обновлена!'
        })
        setCurrentUser(data);
      })
      .catch(err => {
        if (err.includes("400")) {
          setMessage({
            iconPath: noConfirm,
            text: 'Введена некорректная информации!'
          })
        } else {
          setMessage({
            iconPath: noConfirm,
            text: 'Произошла ошибка!'
          })
        }
      });
  }

  function handleSignOut() {
    mainApi.logout();
    setLoggedIn(false);
    localStorage.clear();
    history.push('/');
  }

  function handleAddMovie(movie) {
    return mainApi.addMovie({
        country: movie.country ? movie.country : "Неизвестно",
        director: movie.director,
        duration: movie.duration,
        year: movie.year,
        description: movie.description,
        image: movie.image ? "https://api.nomoreparties.co" + movie.image.url : "https://www.example.com",
        trailer: movie.trailerLink,
        thumbnail: movie.image ? "https://api.nomoreparties.co" + movie.image.formats.thumbnail.url : "https://www.example.com",
        movieId: movie.id,
        nameRU: movie.nameRU,
        nameEN: movie.nameEN ? movie.nameEN : "Empty name",
      }
    )
      .then((movie) => setMyMovies([...myMovies, movie]));
  }

  function handleDeleteMovie(movie) {
    return mainApi.deleteMovie(movie._id)
      .then((movie) => {
        setMyMovies(myMovies.filter((deletedMovie) => deletedMovie._id !== movie._id))
        return movie;
      });
  }

  React.useEffect(() => {
    mainApi.getUserInfo()
      .then((data) => {
        initData(data)
          .then(() => {
            history.push("/");
          })
      })
      .catch((err) => {
        console.log(`Что-то пошло не так: ${err}`)
      });
  }, [history]);

  return (
    <CurrentUserContext.Provider value={currentUser}>
      <div className="page">
        <Switch>
          <Route exact path="/">
            <Main loggedIn={loggedIn}
                  toggleBurg={toggleBurg}/>
          </Route>
          <ProtectedRoute component={Movies}
                          path="/movies"
                          toggleBurg={toggleBurg}
                          movies={movies}
                          myMovies={myMovies}
                          onDelete={handleDeleteMovie}
                          onSave={handleAddMovie}
                          loggedIn={loggedIn}/>
          <ProtectedRoute component={SavedMovies}
                          path="/saved-movies"
                          toggleBurg={toggleBurg}
                          movies={myMovies}
                          onDelete={handleDeleteMovie}
                          loggedIn={loggedIn}/>
          <ProtectedRoute component={Profile}
                          path="/profile"
                          onSubmit={handleUpdateProfile}
                          toggleBurg={toggleBurg}
                          logout={handleSignOut}
                          loggedIn={loggedIn}/>
          <Route path="/signin">
            <Login onSubmit={handleLogin}/>
          </Route>
          <Route path="/signup">
            <Register onSubmit={handleRegister}/>
          </Route>
          <Route path="/error">
            <Error/>
          </Route>
          <Route>
            <Redirect to="/error"/>
          </Route>
        </Switch>
        <Navigation onClose={toggleBurg}
                    isOpen={navigate}/>
        <Popup onOpen={isPopupOpen}
               isLoading={message.loading}
               message={message.text}
               picture={message.iconPath}/>
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
