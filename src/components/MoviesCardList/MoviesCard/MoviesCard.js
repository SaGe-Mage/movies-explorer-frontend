import React from "react";
import img from "../../../images/moviePic.png"
import "./MoviesCard.css";

function MoviesCard({card}) {
  function duration() {
    return `${parseInt(card.duration / 60)}ч ${parseInt(card.duration % 60)}м`;
  }

  return (
    <article className="card">
      <div className="card__top">
        <div className="card__text">
          <h4 className="card__title">{card.nameRU}</h4>
          <p className="card__duration">{duration()}</p>
        </div>
        <button className="card__save"/>
      </div>
      <a href={card.trailerLink}><img src={card.image ? `https://api.nomoreparties.co${card.image.url}` : img}
                                      alt={card.nameRU}
                                      className="card__pic"/></a>
    </article>
  )
}

export default MoviesCard;
