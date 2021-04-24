import React from "react";
import "./Portfolio.css"

function Portfolio() {
  return (
    <section className="portfolio">
      <h4 className="portfolio__title">Портфолио</h4>
      <nav className="portfolio__links">
        <a target="_blank" rel="noreferrer" href="https://github.com/SaGe-Mage/how-to-learn" className="portfolio__link">Статичный сайт</a>
        <a target="_blank" rel="noreferrer" href="https://sage-mage.github.io/russian-travel/" className="portfolio__link">Адаптивный сайт</a>
        <a target="_blank" rel="noreferrer" href="https://moskvitins.students.nomoredomains.icu/" className="portfolio__link">Одностраничное приложение</a>
      </nav>
    </section>
  )
}

export default Portfolio;
