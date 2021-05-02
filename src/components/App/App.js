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
import "./App.css";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

import confirm from "../../images/ok.png"
import noConfirm from "../../images/err.png"

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
      .then(() => initData())
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => console.log(err));
  }

  function handleLogin(data) {
    mainApi.login(data)
      .then(() => initData())
      .then(() => {
        setLoggedIn(true);
        history.push('/movies');
      })
      .catch(err => console.log(err));
  }

  function initData() {
    return mainApi.getUserInfo()
      .then(data => {
        setCurrentUser({...data});
      })
  }

  function handleUpdateProfile(data) {
    handlePopupOpen();
    mainApi.updateProfile(data)
      .then(() => {
        setMessage({
          iconPath: confirm,
          text: 'Информация успешно обновлена!'
        })
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

  React.useEffect(() => {
    initData()
      .then(() => {
        setLoggedIn(true);
        history.push("/");
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
                          loggedIn={loggedIn}/>
          <ProtectedRoute component={SavedMovies}
                          path="/saved-movies"
                          toggleBurg={toggleBurg}
                          loggedIn={loggedIn}/>
          <ProtectedRoute component={Profile}
                          path="/profile"
                          onSubmit={handleUpdateProfile}
                          toggleBurg={toggleBurg}
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
            {loggedIn ? <Redirect to="/"/> : <Redirect to="/signin"/>}
          </Route>
        </Switch>
        <Navigation onClose={toggleBurg}
                    isOpen={navigate}/>
        <Popup onOpen={isPopupOpen}
               isLoading={message.loading}
               message={message.text}
               picture={message.iconPath}
        />
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
