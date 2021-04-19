import React from "react";
import photo from "../../../images/photo.png"

function AboutMe() {
  return (
    <section id="about-me" className="about-me">
      <h2 className="about-me__title">Студент</h2>
      <div className="about-me__grid">
        <div className="about-me__left">
          <h3 className="about-me__name">Виталий</h3>
          <p className="about-me__subtitle">Фронтенд-разработчик, 30 лет</p>
          <p className="about-me__paragraph">Я родился и живу в Саратове, закончил факультет экономики СГУ. У меня есть
            жена
            и дочь. Я люблю слушать музыку, а ещё увлекаюсь бегом. Недавно начал кодить. С 2015 года работал в компании
            «СКБ Контур». После того, как прошёл курс по веб-разработке, начал заниматься фриланс-заказами и ушёл с
            постоянной работы.</p>
          <ul className="about-me__links">
            <li className="about-me__link"><a>Facebook</a></li>
            <li className="about-me__link"><a>Github</a></li>
          </ul>
        </div>
        <img src={photo} alt="Фото студента" className="about-me__photo"/>
      </div>
    </section>
  )
}

export default AboutMe;
