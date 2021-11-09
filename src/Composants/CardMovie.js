import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const CardMovie = (props) => {
  //* Tu récupéres les donnés du parent */
  const film = props;
  const date = film.film.release_date;

  console.log(date);
  // console.log(newDate);
  console.log(film); // On fait un test
  console.log(film.film.categories);
  return (
    <NavLink exact to="/Movie">
      <div className="cardmovie">
        <figure style={{ backgroundImage: "url(" + film.film.poster + ")" }}>
          <img src="" alt="" />
        </figure>
        <div className="content">
          <h3 className="titrecard"> {film.film.title} </h3>
          <time> {date}</time>
          <p id="categories">{film.film.categories.join(", ")}</p>
          <p> {film.film.description} </p>
          <button className="mediumbtn"> + Add</button>
          <button className="mediumbtn"> - Suppr</button>
        </div>
      </div>
    </NavLink>
  );
};

export default CardMovie;
