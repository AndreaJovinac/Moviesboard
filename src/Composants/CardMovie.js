import React, { useState, useEffect } from "react";
import "../Composants/StyleComposants/CardMovie.css";
import { Link } from "react-router-dom";
import Date from "../Services/Date";
import { IoIosTrash } from "react-icons/io";

const CardMovie = (prosp) => {
  //* Tu récupéres les donnés du parent */
  const film = prosp;
  const id = film.film.id;

  console.log(prosp + "prosp");
  console.log(film); // On fait un test
  console.log(film.film.id); // On fait un test

  return (
    // <Link to={`/movie/${id}`}>
    //<Link to={{ pathname: "/movie/", search: `${id}` }}>

    // <Link
    //   to={{ pathname: `/movies/${film.film.id}` }}
    //   search={`${film.film.id}`}
    // >
    <div className="cardmovie">
      <Link to={`/movies/${film.film.id}`}>
        <figure style={{ backgroundImage: "url(" + film.film.poster + ")" }}>
          <img src="" alt="" />
        </figure>
      </Link>
      <div className="content">
        <h3 className="titrecard"> {film.film.title} </h3>
        <time> {Date.DateForm(film.film.release_date)}</time>
        <p id="categories">
          {film.film.categories && film.film.categories.join(", ")}
        </p>
        <p id=""> {film.film.description} </p>
        <button className="mediumbtn"> + Add</button>
        <button className="mediumbtn">
          {" "}
          <IoIosTrash />
          Suppr
        </button>
      </div>
    </div>
  );
};

export default CardMovie;
