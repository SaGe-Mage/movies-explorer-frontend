import React from "react";
import "./Profile.css";

function Profile() {
  return (
    <main className="profile">
      <h1 className="profile__title">Привет, Виталий!</h1>
      <form action="" className="profile__form">
        <label className="profile__label">Имя<
          input type="text" className="profile__input" value="Виталий"/></label>
        <label className="profile__label">Почта
          <input type="text" className="profile__input" value="pochta@yandex.ru"/></label>
        <button className="profile__submit">Редактировать</button>
      </form>
      <button className="profile__logout">Выйти из аккаунта</button>
    </main>
  )
}

export default Profile;
