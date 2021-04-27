import React from "react";
import "./Promo.css";

function Promo({children}) {
  return (
    <div className="promo">
      <h1 className="promo__title">Учебный проект студента факультета Веб-разработки.</h1>
      {children}
    </div>
  )
}

export default Promo;
