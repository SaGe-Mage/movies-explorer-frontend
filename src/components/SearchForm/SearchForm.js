import React, {useState} from "react";
import "./SearchForm.css";
import searchIcn from "../../images/search.svg"
import {useLocation} from "react-router-dom";

function SearchForm({onSubmit}) {
  const location = useLocation();

  const [data, setData] = useState({
    key: '',
    isShort: false,
  });

  React.useEffect(() => {
    if (localStorage.getItem("keys") && location.pathname === "/movies") {
      setData(JSON.parse(localStorage.getItem("keys")));
    }
  }, [location.pathname]);

  function handleChange(event) {
    const {value} = event.target;
    setData({
      ...data,
      key: value,
    })
  }

  function handleChangeCheckbox() {
    setData({
      ...data,
      isShort: document.querySelector(".search__short").checked,
    });
    onSubmit({
      key: data.key,
      isShort: document.querySelector(".search__short").checked
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    onSubmit(data);
  }

  return (
    <form onSubmit={handleSubmit} className="search">
      <div className="search__top">
        <img src={searchIcn} alt="Значок поиска" className="search__icon"/>
        <input name="search" type="text" placeholder="Фильм" className="search__film" value={data.key}
               onChange={handleChange}/>
        <button type="submit" className="search__submit">Найти</button>
      </div>
      <label className="search__label">
        <input name="isShort" type="checkbox" className="search__short" checked={data.isShort}
               onChange={handleChangeCheckbox}/>
        Короткометражки</label>
    </form>
  )
}

export default SearchForm;
