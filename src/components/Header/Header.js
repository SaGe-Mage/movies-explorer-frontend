import React from "react";
import "./Header.css";
import {Link} from 'react-router-dom';
import logo from '../../images/logo.svg'
import accIcon from "../../images/account.svg"
import menuIcon from "../../images/icon-main.svg";

function Header({openBurg}) {
  const logged = true;
  return (
    <header className="header">
      <Link className="header__logo" to="/"><img src={logo} alt="Логотип"/></Link>
      <div className={`header__is-log ${logged ? '' : 'no-display'}`}>
        <nav className="header__nav">
          <Link to="/movies" className="header__nav-link">Фильмы</Link>
          <Link to="/saved-movies" className="header__nav-link">Сохранённые фильмы</Link>
        </nav>
        <Link to="/profile" className="header__Link header__account">
          Аккаунт <img src={accIcon} alt="Иконка аккаунта" className="header__account-img"/>
        </Link>
      </div>
      <img onClick={openBurg} src={menuIcon} alt="Меню" className={`header__hamburger ${logged ? '' : 'no-display'}`}/>
      <div className={`header__no-log ${logged ? 'no-display' : ''}`}>
        <Link to="/signup" className="header__button">Регистрация</Link>
        <Link to="/signin" className="header__button header__button-log">Войти</Link>
      </div>
    </header>
  );
}

export default Header;
