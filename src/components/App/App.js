import React from "react";
import {Route, Switch} from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login"
import Navigation from "../Navigation/Navigation";
import Error from "../Error/Error";
import Footer from "../Footer/Footer";
import "./App.css";

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header/>
          <Main/>
          <Navigation/>
          <Footer/>
        </Route>
        <Route path="/movies">
          <Header/>
          <Movies/>
          <Navigation/>
          <Footer/>
        </Route>
        <Route path="/saved-movies">
          <Header/>
          <SavedMovies/>
          <Navigation/>
          <Footer/>
        </Route>
        <Route path="/profile">
          <Header/>
          <Profile/>
          <Navigation/>
        </Route>
        <Route path="/signin">
          <Login/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
        <Route path="/error">
          <Error/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
