import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

function SavedMovies({loggedIn, toggleBurg, movies, onDelete}) {
  return (
    <>
      <Header
        openBurg={toggleBurg}
        loggedIn={loggedIn}/>
      <main className="saved">
        <SearchForm/>
        <MoviesCardList cards={movies} onDelete={onDelete}/>
      </main>
      <Footer/>
    </>
  )
}

export default SavedMovies;
