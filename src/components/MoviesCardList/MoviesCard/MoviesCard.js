import React from "react";
import img from "../../../images/moviePic.png"
import "./MoviesCard.css";

function MoviesCard() {
  return (
    <article className="card">
      <div className="card__top">
        <div className="card__text">
          <h4 className="card__title">33 слова о дизайне</h4>
          <p className="card__duration">1ч 47м</p>
        </div>
        <button className="card__save card__save_is-save"></button>
      </div>
      <img src={img} alt="Картинка фильма" className="card__pic"/>
    </article>
  )
}

export default MoviesCard;
