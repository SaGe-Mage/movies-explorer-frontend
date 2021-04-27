import React from "react";
import "./Navigation.css";
import {Link, NavLink} from "react-router-dom";
import accIcon from "../../images/account.svg";

function Navigation() {
  return (
    <section className="navigation">
      <div className="navigation__wrap">
        <button className="navigation__close"></button>
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
