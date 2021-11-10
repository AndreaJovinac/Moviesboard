import React, { useState, useEffect } from "react";
import "../Composants/StyleComposants/Actors.css";
import { Link } from "react-router-dom";
import axios from "axios";
import { useParams } from "react-router";

const Actors = () => {
  const [film, setFilm] = useState([]);
  const { id } = useParams(); // une fonction qui récupére les paramètres de l'URL
  //const id = film[0].id;
  /* Tu déclares un tableau dans lequel il y a 2 proposité qui seront dynamisé */
  useEffect(() => {
    axios //  La bibliothéque AXIOS : te permet faire gérer l'appel à a demande
      .get(`http://localhost:3000/movies/${id}`) // On mets l'URL du serveur
      .then((response) => setFilm(response.data.film)); // Tu me récupères la reponse dans lequel il y a toutes les données
  }, []);
  console.log(film); // On teste voir si il y a tous les films concernés
  //console.log(id);
  console.log(film);

  return (
    // <Link to={`/movie/${id}`}>
    //<Link to={{ pathname: "/movie/", search: `${id}` }}>

    <div className="actor">
      <img src="" alt="" />
      <div className="content">
        <h3 className="titrecard">NOM Prénom </h3>
        <p>Personnages</p>
      </div>
    </div>
  );
};

export default Actors;
