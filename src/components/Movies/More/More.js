import React from "react";
import "./More.css";

function More({onClick}) {
  return (
    <button className="more" onClick={onClick}>Ещё</button>
  )
}

export default More;
