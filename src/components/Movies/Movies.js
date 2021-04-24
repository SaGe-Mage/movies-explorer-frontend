import React from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "./More/More";
import "./Movies.css"

function Movies() {
  return (
    <main className="movies">
      <SearchForm/>
      <MoviesCardList/>
      <More/>
    </main>
  )
}

export default Movies;
