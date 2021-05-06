import React, {useState} from "react";
import SearchForm from "../SearchForm/SearchForm";
import MoviesCardList from "../MoviesCardList/MoviesCardList";
import "./SavedMovies.css";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import {keyFilter, shortFilter} from "../../utils/filters";

function SavedMovies({loggedIn, toggleBurg, movies, onDelete}) {
  const [cards, setCards] = useState([...movies]);
  const [errMes, setErrMes] = useState("");

  function findMovies(data) {
    const {key, isShort} = data;

    setErrMes("");
    let filtered = keyFilter(movies, key);
    if (filtered) {
      if (isShort) {
        filtered = shortFilter(filtered);
      }
      if (filtered.length) {
        if (window.innerWidth <= 1124) {
          setCards(filtered.slice(0, 8));
        } else if (window.innerWidth <= 480) {
          setCards(filtered.slice(0, 5));
        } else {
          setCards(filtered.slice(0, 12));
        }
      } else {
        setCards([]);
        setErrMes("Ничего не найдено");
      }
    } else {
      setCards([]);
      setErrMes("Ничего не найдено");
    }
  }

  return (
    <>
      <Header
        openBurg={toggleBurg}
        loggedIn={loggedIn}/>
      <main className="saved">
        <SearchForm onSubmit={findMovies}/>
        <span>{errMes}</span>
        <MoviesCardList cards={cards} onDelete={onDelete}/>
      </main>
      <Footer/>
    </>
  )
}

export default SavedMovies;
