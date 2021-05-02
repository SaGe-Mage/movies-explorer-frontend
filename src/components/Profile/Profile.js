import React, {useState} from "react";
import "./Profile.css";
import Header from "../Header/Header";

import CurrentUserContext from "../../contexts/CurrentUserContext";

function Profile({loggedIn, toggleBurg, onSubmit}) {
  const currentUser = React.useContext(CurrentUserContext);

  const [data, setData] = useState({
    name: currentUser.name,
    email: currentUser.email,
  });

  const [err, setErr] = useState({
    name: true,
    email: true,
  });
  const [errMes, setErrMes] = useState({
    name: '',
    email: '',
  });

  function handleChange(event) {
    const {name, value, validity, validationMessage} = event.target;

    setData({
      ...data,
      [name]: value
    });

    if (name === "name" && !validName(value)) {
      setErr({
        ...err,
        name: false
      });

      setErrMes({
        ...errMes,
        name: "Поле должно содержать только латиницу, кириллицу, пробел или дефис."
      });
      return;
    }

    setErr({
      ...err,
      [name]: validity.valid
    });
    setErrMes({
      ...errMes,
      [name]: validationMessage
    });
  }

  function validName(data) {
    const regex = /(^$)|(^[a-zа-яё]+([-\s]*[a-zа-яё]+)*$)/i;
    return regex.test(data);
  }

  function handleSubmit(e) {
    e.preventDefault();

    onSubmit({
      name: data.name,
      email: data.email,
    });
  }

  function isReady() {
    return err.name && err.email && (data.name !== currentUser.name || data.email !== currentUser.email);
  }

  return (
    <>
      <Header
        openBurg={toggleBurg}
        loggedIn={loggedIn}/>
      <main className="profile">
        <h1 className="profile__title">Привет, {currentUser.name}!</h1>
        <form action="" className="profile__form" onSubmit={handleSubmit}>
          <label className="profile__label">Имя<
            input
            name="name"
            type="text"
            className={`profile__input ${err.name ? "" : "profile__input_is-err"}`}
            value={data.name}
            onChange={handleChange}
            minLength="2"
            maxLength="30"
            required/></label>
          <span
            className={`profile__input-error ${err.name ? "" : "profile__input-error_active"}`}
            id="input-error"
          >{errMes.name}
        </span>
          <label className="profile__label">Почта
            <input
              name="email"
              type="email"
              className={`profile__input ${err.email ? "" : "profile__input_is-err"}`}
              value={data.email || ""}
              onChange={handleChange}
              required/></label>
          <span
            className={`profile__input-error ${err.email ? "" : "profile__input-error_active"}`}
            id="input-error"
          >{errMes.email}
        </span>
          <button type="submit"
                  className={`profile__submit ${isReady() ? "" : "profile__submit_inactive"}`}>
            Редактировать
          </button>
        </form>
        <button className="profile__logout">Выйти из аккаунта</button>
      </main>
    </>
  )
}

export default Profile;
