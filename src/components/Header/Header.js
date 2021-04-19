import React from "react";
import logo from '../../images/logo.svg'

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Логотип Место Россия" className="header__logo"/>
      <div className="header__left">
        <button className="header__button-reg">Регистрация</button>
        <button className="header__button-log">Войти</button>
      </div>
    </header>
  );
}

export default Header;
