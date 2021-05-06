import React, {useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "./More/More";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import {keyFilter, shortFilter} from "../../utils/filters";

function Movies({loggedIn, toggleBurg, movies, myMovies, onSave, onDelete}) {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [errMes, setErrMes] = useState("");

  function findMovies(data) {
    setIsLoading(true);
    const {key, isShort} = data;

    setErrMes("");
    if (key) {
      let filtered = keyFilter(movies, key);
      if (isShort) {
        filtered = shortFilter(filtered);
      }
      if (filtered.length) {
        setFilteredMovies(filtered);
        if (window.innerWidth <= 1124) {
          setCards(filtered.slice(0, 8));
        } else if (window.innerWidth <= 480) {
          setCards(filtered.slice(0, 5));
        } else {
          setCards(filtered.slice(0, 12));
        }
      } else {
        setCards([]);
        setFilteredMovies([]);
        setErrMes("Ничего не найдено")
      }
    } else {
      setCards([]);
      setFilteredMovies([]);
      setErrMes("Нужно ввести ключевое слово");
    }
    setIsLoading(false);
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
        <span className="movies__error">{errMes}</span>
        {isLoading ?
          <Preloader/> :
          <MoviesCardList
            cards={cards}
            onSave={onSave}
            onDelete={onDelete}
            movies={movies}
            myMovies={myMovies}
          />
        }
        {!moreActive() ? <More onClick={handleMoreOpen}/> : ''}
      </main>
      <Footer/>
    </>
  )
}

export default Movies;
