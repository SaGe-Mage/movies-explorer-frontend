import React from "react";
import "./Navigation.css";
import {Link, NavLink} from "react-router-dom";
import accIcon from "../../images/account.svg";

function Navigation({onClose, isOpen}) {
  return (
    <section className={`navigation ${isOpen ? 'is-open' : ""}`}>
      <div className="navigation__wrap">
        <button className="navigation__close" onClick={onClose}></button>
        <nav className="navigation__nav">
          <nav className="top">
            <NavLink exact to="/" activeClassName="navigation__link_active"
                     className="navigation__link">Главная</NavLink>
            <NavLink to="/movies" activeClassName="navigation__link_active"
                     className="navigation__link">Фильмы</NavLink>
            <NavLink to="/saved-movies" activeClassName="navigation__link_active"
                     className="navigation__link">Сохранённые фильмы</NavLink>
          </nav>
          <Link to="/profile" className="navigation__account">
            Аккаунт <img src={accIcon} alt="Иконка аккаунта" className="navigation__account-img"/>
          </Link>
        </nav>
      </div>
    </section>
  )
}

export default Navigation;
