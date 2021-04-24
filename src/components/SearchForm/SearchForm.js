import React from "react";
import "./SearchForm.css"
import searchIcn from "../../images/search.svg"

function SearchForm() {
  return (
    <form action="" className="search">
      <div className="search__top">
        <img src={searchIcn} alt="" className="search__icon"/>
        <input type="text" placeholder="Фильм" className="search__film"/>
        <button type="submit" className="search__submit">Найти</button>
      </div>
      <label className="search__label"><input type="checkbox" className="search__short"/>Короткометражки</label>
    </form>
  )
}

export default SearchForm;
