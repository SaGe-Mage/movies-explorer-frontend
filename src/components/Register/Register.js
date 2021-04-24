import React from "react";
import logo from '../../images/logo.svg'
import "./Register.css"
import { Link } from 'react-router-dom';

function Register() {
  return (
    <main className="register">
      <div className="register__top">
        <img src={logo} alt="" className="register__logo"/>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form action="" className="register__form">
        <label className="register__label">Имя<
          input type="text" className="register__input" value="Виталий"/></label>
        <label className="register__label">E-mail
          <input type="text" className="register__input" value="pochta@yandex.ru"/></label>
        <label className="register__label">Пароль<
          input type="password" className="register__input" value="Виталий"/></label>
        <button className="register__submit">Зарегистрироваться</button>
      </form>
      <span className="register__span">Уже зарегистрированы?<Link to="/signin" className="register__link">Войти</Link></span>
    </main>
  )
}

export default Register;
