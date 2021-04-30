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
import "./App.css";

import CurrentUserContext from "../../contexts/CurrentUserContext";

import mainApi from "../../utils/MainApi";
import ProtectedRoute from "../ProtectedRoute/ProtectedRoute";

function App() {
  const [currentUser, setCurrentUser] = React.useState({});
  const [loggedIn, setLoggedIn] = React.useState(false);
  const [navigate, setNavigate] = React.useState(false);

  function toggleBurg() {
    setNavigate(!navigate);
  }

  const history = useHistory();

  function handleRegister(data) {
    mainApi.register(data)
      .then((res) => {
        setLoggedIn(true);
        history.push('/movies');
        console.log(res);
      })
      .catch(err => console.log(err));
  }

  function handleLogin(data) {
    mainApi.login(data)
      .then((res) => {
        history.push('/movies');
        console.log(res);
      })
      .catch(err => console.log(err));
  }

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
      </div>
    </CurrentUserContext.Provider>
  );
}

export default App;
