import React, { useState, useEffect } from "react";
import "../Composants/StyleComposants/Actors.css";
import { Link } from "react-router-dom";

const Actors = (prosp) => {
  const film = prosp;
  const actors = film.film.actors;

  console.log(film.film.actors);
  //console.log(actors[0].name);

  //* Tu récupéres les donnés du parent */

  return (
    // <Link to={`/movie/${id}`}>
    //<Link to={{ pathname: "/movie/", search: `${id}` }}>

    <div className="actor">
      <figure
        id="img-actor"
        style={{ backgroundImage: "url(" + film.poster + ")" }}
      >
        <img src="" alt="" />
      </figure>
      <div className="content">
        <h3 className="titrecard">NOM Prénom </h3>
        <p>Personnages</p>
      </div>
    </div>
  );
};

export default Actors;
