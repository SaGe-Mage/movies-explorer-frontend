import React from "react";
import MoviesCard from "./MoviesCard/MoviesCard";
import "./MoviesCardList.css";

function MoviesCardList({cards}) {
  return (
    <section className="movies-cards">
      {cards.map((card) => (
        <MoviesCard card={card}
                    key={card.id}/>
      ))}
    </section>
  )
}

export default MoviesCardList;
