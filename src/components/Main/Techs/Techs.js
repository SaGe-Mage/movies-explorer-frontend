import React from "react";
import "./Techs.css"

function Techs() {
  return (
    <div className="bg_gray">
      <section id="techs" className="techs">
        <h2 className="techs__title">Технологии</h2>
        <h3 className="techs__subtitle">7 технологий</h3>
        <p className="techs__paragraph">На курсе веб-разработки мы освоили технологии,
          которые применили в дипломном проекте.</p>
        <ul className="techs__line">
          <li className="techs__line-part">HTML</li>
          <li className="techs__line-part">CSS</li>
          <li className="techs__line-part">JS</li>
          <li className="techs__line-part">React</li>
          <li className="techs__line-part">Git</li>
          <li className="techs__line-part">Express.js</li>
          <li className="techs__line-part">mongoDB</li>
        </ul>
      </section>
    </div>
  )
}

export default Techs;
