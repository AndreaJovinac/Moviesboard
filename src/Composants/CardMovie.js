import React, { useState, useEffect } from "react";
import Header from "../Composants/StyleComposants/CardMovie.css";
import axios from "axios";

const CardMovie = (props) => {
  //* Tu récupéres les donnés du parent */
  const film = props;
  console.log(film); // On fait un test
  return (
    <div className="cardmovie">
      <figure style={{ backgroundImage: "url(" + film.film.poster + ")" }}>
        <img src="" alt="" />
      </figure>
      <div className="content">
        <h3 className="titrecard"> {film.film.title} </h3>
        <time> {film.film.release_date}</time>
        <p id="categories"> {film.film.categories}</p>
        <p> {film.film.description} </p>
        <button> + Add</button>
        <button> - Suppr</button>
      </div>
    </div>
  );
};

export default CardMovie;
