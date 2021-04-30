import React, {useState} from "react";
import logo from '../../images/logo.svg'
import "./Register.css";
import {Link} from 'react-router-dom';

function Register({onSubmit}) {
  const [data, setData] = useState({
    name: '',
    email: '',
    password: ''
  });

  const [err, setErr] = useState({
    name: true,
    email: true,
    password: true
  });
  const [errMes, setErrMes] = useState({
    name: '',
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
      name: data.name,
      email: data.email,
      password: data.password,
    });
  }

  return (
    <main className="register">
      <div className="register__top">
        <img src={logo} alt="Логотип" className="register__logo"/>
        <h1 className="register__title">Добро пожаловать!</h1>
      </div>
      <form
        name="register-form"
        className="register__form"
        onSubmit={handleSubmit}
        noValidate
      >
        <label className="register__label">Имя
          <input
            type="text"
            name="name"
            className={`register__input ${err.name ? "" : "register__input_is-err"}`}
            value={data.name || ''}
            onChange={handleChange}
            minLength="2"
            maxLength="30"
            required
          /></label>
        <span
          className={`register__input-error ${err.name ? "" : "register__input-error_active"}`}
          id="input-error"
        >{errMes.name}
        </span>
        <label className="register__label">E-mail
          <input
            type="email"
            name="email"
            className={`register__input ${err.email ? "" : "register__input_is-err"}`}
            value={data.email || ''}
            onChange={handleChange}
            required
          /></label>
        <span
          className={`register__input-error ${err.email ? "" : "register__input-error_active"}`}
          id="input-error"
        >{errMes.email}
        </span>
        <label className="register__label">Пароль
          <input
            type="password"
            name="password"
            className={`register__input ${err.password ? "" : "register__input_is-err"}`}
            value={data.password || ''}
            onChange={handleChange}
            required
          /></label>
        <span
          className={`register__input-error ${err.password ? "" : "register__input-error_active"}`}
          id="input-error"
        >{errMes.password}
        </span>
        <button
          type="submit"
          name="submit"
          className="register__submit">Зарегистрироваться
        </button>
      </form>
      <span className="register__span">Уже зарегистрированы?<Link to="/signin"
                                                                  className="register__link">Войти</Link></span>
    </main>
  )
}

export default Register;
