import React from "react";
import "./Popup.css";
import Preloader from "../Preloader/Preloader";

function Popup({onOpen, isLoading, message, picture}) {
  return (
    <section className={`popup ${onOpen ? "popup_is-open" : ""}`}>
      <div className="popup__banner">
        {isLoading ?
          <Preloader/> :
          <>
            <img src={picture} alt="" className="popup__img"/>
            <h1 className="popup__title">{message}</h1>
          </>
        }
      </div>
    </section>
  )
}

export default Popup;
