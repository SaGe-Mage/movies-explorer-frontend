import React from "react";
import "./Error.css";
import {Link} from 'react-router-dom';

function Error() {
  return (
    <main className="error">
      <h1 className="error__title">404</h1>
      <p className="error__subtitle">Страница не найдена</p>
      <Link to="/" className="error__link">Назад</Link>
    </main>
  )
}

export default Error;
