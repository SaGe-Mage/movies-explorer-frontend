import React from "react";

function AboutProject() {
  return (
    <section id="about" className="about">
      <h2 className="about__title">О проекте</h2>
      <ul className="about__cards">
        <li className="about__card">
          <h3 className="about__subtitle">Дипломный проект включал 5 этапов</h3>
          <p className="about__paragraph">Составление плана, работу над бэкендом, вёрстку,
            добавление функциональности и финальные доработки.</p>
        </li>
        <li className="about__card">
          <h3 className="about__subtitle">На выполнение диплома ушло 5 недель</h3>
          <p className="about__paragraph">У каждого этапа был мягкий и жёсткий дедлайн,
            которые нужно было соблюдать, чтобы успешно защититься.</p>
        </li>
      </ul>
      <ul className="about__line">
        <li className="about__line-part green">1 неделя</li>
        <li className="about__line-part gray">4 недели</li>
        <li className="about__line-part black">Back-end</li>
        <li className="about__line-part black">Front-end</li>
      </ul>
    </section>
  )
}

export default AboutProject;
