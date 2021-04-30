import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "./More/More";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function Movies({loggedIn, toggleBurg}) {
  return (
    <>
      <Header
        openBurg={toggleBurg}
        loggedIn={loggedIn}/>
      <main className="movies">
        <SearchForm/>
        <MoviesCardList/>
        <More/>
      </main>
      <Footer/>
    </>
  )
}

export default Movies;
