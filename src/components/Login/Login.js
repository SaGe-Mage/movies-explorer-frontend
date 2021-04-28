import React from "react";
import "./Login.css";
import {Link} from 'react-router-dom';
import logo from "../../images/logo.svg";

function Login() {
  return (
    <main className="login">
      <div className="login__top">
        <img src={logo} alt="Логотип" className="login__logo"/>
        <h1 className="login__title">Рады видеть!</h1>
      </div>
      <form action="" className="login__form">
        <label className="login__label">E-mail
          <input type="text" className="login__input" value="pochta@yandex.ru"/></label>
        <span
          className="login__input-error"
          id="input-error"
        >Что-то пошло не так...
        </span>
        <label className="login__label">Пароль<
          input type="password" className="login__input" value="Виталий"/></label>
        <span
          className="login__input-error"
          id="input-error"
        >Что-то пошло не так...
        </span>
        <button className="login__submit">Войти</button>
      </form>
      <span className="login__span">Ещё не зарегистрированы?<Link to="/signup"
                                                                  className="login__link">Регистрация</Link></span>
    </main>
  )
}

export default Login;
