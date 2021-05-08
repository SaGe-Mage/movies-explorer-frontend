import React, {useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import More from "./More/More";
import "./Movies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Preloader from "../Preloader/Preloader";

import {keyFilter, shortFilter} from "../../utils/filters";

import {FILMS_FOR_LONG_WINDOW, FILMS_FOR_SHORT_WINDOW} from "../../utils/data"

function Movies({loggedIn, toggleBurg, movies, myMovies, onSave, onDelete}) {
  const [isLoading, setIsLoading] = useState(false);
  const [cards, setCards] = useState([]);
  const [filteredMovies, setFilteredMovies] = useState([]);
  const [errMes, setErrMes] = useState("");

  React.useEffect(() => {
    if (localStorage.getItem("filteredFilms")) {
      setFilteredMovies(JSON.parse(localStorage.getItem("filteredFilms")));
      showCards(JSON.parse(localStorage.getItem("filteredFilms")));
    }
  }, []);

  function findMovies(data) {
    setIsLoading(true);
    const {key, isShort} = data;
    localStorage.setItem("keys", JSON.stringify(data));

    setErrMes("");
    if (key) {
      let filtered = keyFilter(movies, key);
      if (isShort) {
        filtered = shortFilter(filtered);
      }
      if (filtered.length) {
        localStorage.setItem("filteredFilms", JSON.stringify(filtered));
        setFilteredMovies(filtered);
        showCards(filtered);
      } else {
        localStorage.clear();
        setCards([]);
        setFilteredMovies([]);
        setErrMes("Ничего не найдено")
      }
    } else {
      localStorage.clear();
      setCards([]);
      setFilteredMovies([]);
      setErrMes("Нужно ввести ключевое слово");
    }
    setIsLoading(false);
  }

  function showCards(movies) {
    if (window.innerWidth <= 1124) {
      setCards(movies.slice(0, 8));
    } else if (window.innerWidth <= 480) {
      setCards(movies.slice(0, 5));
    } else {
      setCards(movies.slice(0, 12));
    }
  }

  function handleMoreOpen() {
    if (window.innerWidth <= 1124) {
      setCards(filteredMovies.slice(0, cards.length + FILMS_FOR_SHORT_WINDOW));
    } else {
      setCards(filteredMovies.slice(0, cards.length + FILMS_FOR_LONG_WINDOW));
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
