import React from "react";
import {useLocation} from 'react-router-dom';
import img from "../../../images/moviePic.png"
import "./MoviesCard.css";

function MoviesCard({card, onClick, isMine, id}) {
  const location = useLocation();

  function duration() {
    return `${parseInt(card.duration / 60)}ч ${parseInt(card.duration % 60)}м`;
  }

  function handleClick(event) {
    onClick(event.target, id);
  }

  return (
    <article className="card">
      <div className="card__top">
        <div className="card__text">
          <h4 className="card__title">{card.nameRU}</h4>
          <p className="card__duration">{duration()}</p>
        </div>
        <button
          className={`card__save ${isMine ? "card__save_is-save" : ""}`}
          onClick={handleClick}/>
      </div>
      <a href={location.pathname === "/movies" ? card.trailerLink : card.trailer} className="card__link">
        <img src={card.image ? location.pathname === "/movies" ?
          `https://api.nomoreparties.co${card.image.url}` : card.image
          : img}
             alt={card.nameRU}
             className="card__pic"/></a>
    </article>
  )
}

export default MoviesCard;
