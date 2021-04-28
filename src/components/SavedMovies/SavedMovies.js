import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";

function SavedMovies() {
  return (
    <section className="saved">
      <SearchForm/>
      <MoviesCardList/>
    </section>
  )
}

export default SavedMovies;