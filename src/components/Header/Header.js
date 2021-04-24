import React from "react";
import "./Header.css"
import { Link } from 'react-router-dom';
import logo from '../../images/logo.svg'
import accIcon from "../../images/account.svg"

function Header() {
  const logged = false;
  return (
    <header className="header">
      <Link to="/"><img src={logo} alt="Логотип Место Россия" className="header__logo"/></Link>
      <div className="header__left">
        <nav className={`header__nav ${logged ? '' : 'no-display'}`}>
          <Link to="/movies" className="header__nav-link">Фильмы</Link>
          <Link to="/saved-movies" className="header__nav-link">Сохранённые фильмы</Link>
        </nav>
        <div className={`header__no-log ${logged ? 'no-display' : ''}`}>
          <Link to="/signup" className="header__button header__button-reg">Регистрация</Link>
          <Link to="/signin" className="header__button header__button-log">Войти</Link>
        </div>
        <Link to="/profile" className={`header__Link header__account ${logged ? '' : 'no-display'}`}>
          Аккаунт <img src={accIcon} alt="" className="header__account-img"/>
        </Link>
      </div>
    </header>
  );
}

export default Header;
