import React, {useState} from "react";
import "./Login.css";
import {Link} from 'react-router-dom';
import logo from "../../images/logo.svg";

function Login({onSubmit}) {
  const [data, setData] = useState({
    email: '',
    password: ''
  });

  const [err, setErr] = useState({
    email: false,
    password: false
  });
  const [errMes, setErrMes] = useState({
    email: '',
    password: ''
  });

  function handleChange(event) {
    const {name, value, validity, validationMessage} = event.target;

    setData({
      ...data,
      [name]: value
    });
    setErr({
      ...err,
      [name]: validity.valid
    });
    setErrMes({
      ...errMes,
      [name]: validationMessage
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      email: data.email,
      password: data.password,
    });
  }

  return (
    <main className="login">
      <div className="login__top">
        <img src={logo} alt="Логотип" className="login__logo"/>
        <h1 className="login__title">Рады видеть!</h1>
      </div>
      <form
        name="login"
        className="login__form"
        onSubmit={handleSubmit}
        noValidate
      >
        <label className="login__label">E-mail
          <input
            name="email"
            type="email"
            className="login__input"
            value={data.email || ""}
            onChange={handleChange}
            required
          /></label>
        <span
          className="login__input-error"
          id="input-error"
        >Что-то пошло не так...
        </span>
        <label className="login__label">Пароль<
          input
          name="password"
          type="password"
          className="login__input"
          value={data.password || ""}
          onChange={handleChange}
          required
        /></label>
        <span
          className="login__input-error"
          id="input-error"
        >Что-то пошло не так...
        </span>
        <button
          className={`login__submit ${err.email && err.password ? "" : "login__submit_inactive"}`}>Войти
        </button>
      </form>
      <span className="login__span">Ещё не зарегистрированы?<Link to="/signup"
                                                                  className="login__link">Регистрация</Link></span>
    </main>
  )
}

export default Login;
