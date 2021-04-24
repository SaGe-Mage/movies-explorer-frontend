import React from "react";
import "./Footer.css"

function Footer() {
  return(
    <section className="footer">
      <h2 className="footer__title">Учебный проект Яндекс.Практикум х BeatFilm.</h2>
      <div className="footer__bottom">
        <p className="footer__copyright">&copy; 2020</p>
        <nav className="footer__links">
          <a target="_blank" rel="noreferrer" href="https://praktikum.yandex.ru/" className="footer__link">Яндекс.Практикум</a>
          <a target="_blank" rel="noreferrer" href="https://github.com/SaGe-Mage" className="footer__link">Github</a>
          <a target="_blank" rel="noreferrer" href="https://vk.com/id94975770" className="footer__link">Facebook</a>
        </nav>
      </div>
    </section>
  )
}

export default Footer;
