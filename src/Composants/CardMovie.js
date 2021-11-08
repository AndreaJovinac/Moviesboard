import React from "react";
import Header from "../Composants/StyleComposants/CardMovie.css";

function CardMovie() {
  return (
    <div className="cardmovie">
      <figure>
        <img src="" alt="" />
      </figure>
      <div className="content">
        <h3 className="titrecard"> Titre</h3>
        <date> Date </date>
        <p> Catégorie</p>
      </div>
    </div>
  );
}

export default CardMovie;
