import React from "react";
import {useLocation} from 'react-router-dom';
import MoviesCard from "./MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({cards, onSave, onDelete, movies, myMovies}) {
  const location = useLocation();

  function toggle(button, id) {
    if (location.pathname === "/saved-movies") {
      onDelete(cards.find((movie) => movie._id === id));
    } else {
      if (button.classList.contains('card__save_is-save')) {
        onDelete(myMovies.find((movie) => movie.movieId === id));
        button.classList.remove('card__save_is-save');
      } else {
        onSave(movies.find((movie) => movie.id === id))
          .then(() => button.classList.add('card__save_is-save'))
          .catch((err) => console.log(err));
      }
    }
  }

  function isMine(movie) {
    return myMovies.some((myMovie) => myMovie.movieId === movie.id);
  }

  return (
    <section className="movies-cards">
      {cards.map((card) => (
        <MoviesCard card={card}
                    isMine={location.pathname === "/movies" ? isMine(card) : true}
                    key={location.pathname === "/movies" ? card.id : card._id}
                    id={location.pathname === "/movies" ? card.id : card._id}
                    onClick={toggle}
                    onDelete={onDelete}/>
      ))}
    </section>
  )
}

export default MoviesCardList;
