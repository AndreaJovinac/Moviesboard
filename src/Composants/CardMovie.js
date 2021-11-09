import React, { useState, useEffect } from "react";
import Header from "../Composants/StyleComposants/CardMovie.css";
import axios from "axios";

const CardMovie = () => {
  return (
    <div className="cardmovie">
      <figure>
        <img src="" alt="" />
      </figure>
      <div className="content">
        <h3 className="titrecard"> </h3>
        <date> Date </date>
        <p> Catégorie</p>
        <p> lorem ipsum </p>
        <button> + Add</button>
        <button> - Suppr</button>
      </div>
    </div>
  );
};

export default CardMovie;
