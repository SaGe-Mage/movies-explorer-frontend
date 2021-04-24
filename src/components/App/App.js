import React from "react";
import {Route, Switch} from 'react-router-dom';
import Header from "../Header/Header";
import Main from "../Main/Main";
import Movies from "../Movies/Movies";
import SavedMovies from "../SavedMovies/SavedMovies";
import Profile from "../Profile/Profile";
import Register from "../Register/Register";
import Login from "../Login/Login";
import Footer from "../Footer/Footer";
import "./App.css"

function App() {
  return (
    <div className="page">
      <Switch>
        <Route exact path="/">
          <Header/>
          <Main/>
          <Footer/>
        </Route>
        <Route path="/movies">
          <Header/>
          <Movies/>
          <Footer/>
        </Route>
        <Route path="/saved-movies">
          <Header/>
          <SavedMovies/>
          <Footer/>
        </Route>
        <Route path="/profile">
          <Header/>
          <Profile/>
        </Route>
        <Route path="/signin">
          <Login/>
        </Route>
        <Route path="/signup">
          <Register/>
        </Route>
      </Switch>
    </div>
  );
}

export default App;
