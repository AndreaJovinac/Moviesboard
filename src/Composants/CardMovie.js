import React, { useState, useEffect } from "react";
import "../Composants/StyleComposants/CardMovie.css";
import { Link } from "react-router-dom";

const CardMovie = (props) => {
  //* Tu récupéres les donnés du parent */
  const film = props;

  console.log(film); // On fait un test

  return (
    <Link to="/movie">
      <div className="cardmovie">
        <figure style={{ backgroundImage: "url(" + film.film.poster + ")" }}>
          <img src="" alt="" />
        </figure>
        <div className="content">
          <h3 className="titrecard"> {film.film.title} </h3>
          <time> {film.film.release_date}</time>
          <p id="categories">{film.film.categories}</p>
          <p> {film.film.description} </p>
          <button className="mediumbtn"> + Add</button>
          <button className="mediumbtn"> x Suppr</button>
        </div>
      </div>
    </Link>
  );
};

export default CardMovie;
