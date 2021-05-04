import React, {useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "./More/More";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import moviesApi from "../../utils/MoviesApi";

import {keyFilter, shortFilter} from "../../utils/filters";

function Movies({loggedIn, toggleBurg}) {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = React.useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);

  function findMovies(data) {
    const {key, isShort} = data;

    moviesApi.getMovies()
      .then(movies => {
        setIsLoading(true)
        localStorage.setItem("movies", JSON.stringify(movies));
      })
      .finally(() => setIsLoading(false))
      .catch(err => console.log(err));

    if (key) {
      let filtered = keyFilter(JSON.parse(localStorage.getItem("movies")), key);
      if (isShort) {
        filtered = shortFilter(filtered);
      }
      setFilteredMovies(filtered);
      if (window.innerWidth <= 1124) {
        setCards(filtered.slice(0, 8));
      } else if (window.innerWidth <= 480) {
        setCards(filtered.slice(0, 5));
      } else {
        setCards(filtered.slice(0, 12));
      }
    } else {
      console.log("nea");
    }
  }

  function handleMoreOpen() {
    if (window.innerWidth <= 1124) {
      setCards(filteredMovies.slice(0, cards.length + 2));
    } else {
      setCards(filteredMovies.slice(0, cards.length + 3));
    }
  }

  function moreActive() {
    if (filteredMovies) {
      return cards.length === filteredMovies.length;
    }
    return true;
  }

  return (
    <>
      <Header
        openBurg={toggleBurg}
        loggedIn={loggedIn}/>
      <main className="movies">
        <SearchForm onSubmit={findMovies}/>
        {isLoading ?
          <Preloader/> :
          <MoviesCardList
            cards={cards}
          />
        }
        {!moreActive() ? <More onClick={handleMoreOpen}/> : ''}
      </main>
      <Footer/>
    </>
  )
}

export default Movies;
