import React, { useState, useEffect, ReactFragment } from "react";
import "../Composants/StyleComposants/CardMovie.css";
import { Link } from "react-router-dom";
import Date from "../Services/Date";
import { IoIosTrash, IoMdCreate } from "react-icons/io";
import Modal from "../Composants/Modal";
import axios from "axios";
import ButtonDelete from "./ButtonDelete";

const CardMovie = (prosp) => {
  //* Tu récupéres les donnés du parent */
  const film = prosp;
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const id = film.film.id;
  console.log(prosp + "prosp");
  console.log(film); // On fait un test
  console.log(film.film.id); // On fait un test

  // const DisplayNone = () => {
  //   setModalIsOpen(true);
  //   DeleteMovie();
  // };
  // const DeleteMovie = () => {
  //   axios.delete(`http://localhost:3000/movies/${id}`);
  //   // window.location.reload();
  // };

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
        <time> Date de sortie : {Date.DateForm(film.film.release_date)}</time>
        <p id="categories">
          {film.film.categories && film.film.categories.join(", ")}
        </p>
        <p id=""> {film.film.description.substring(0, 80).concat("... ")} </p>
        <Link to={"edit"}>
          <button id="edit-btn" className="mediumbtn">
            <IoMdCreate /> Modifier
          </button>
        </Link>
        <button onClick={() => setModalIsOpen(true)} className="mediumbtn">
          <IoIosTrash />
          Supprimer
        </button>
      </div>
    </div>
  );
};

export default CardMovie;
