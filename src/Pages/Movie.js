import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import CardMovie from "../Composants/CardMovie";
import "../Styles/Movie.css";

const Movie = (props) => {
  const [film, setFilm] = useState([]);
  const [clickFilm, seClickFilm] = useState([]);
  /* Tu déclares un tableau dans lequel il y a 2 proposité qui seront dynamisé */
  useEffect(() => {
    axios //  La bibliothéque AXIOS : te permet faire gérer l'appel à a demande
      .get("http://localhost:3000/movies/:id") // On mets l'URL du serveur
      .then((response) => setFilm(response.data)); // Tu me récupères la reponse dans lequel il y a toutes les données
  }, []);
  console.log(film); // On teste voir si il y a tous les films concernés
  return (
    <div className="movie">
      <Header />
      <div className="content-movie">
        <button className="mediumbtn"> Retour</button>
        <div className="data-movie">
          <div className="movie">
            <h2> Titre</h2>
            <time> date de sortie </time>
            <p> tag</p>
            <p> Description </p>
            <h3> Acteurs </h3>
            <ul>
              <li></li>
            </ul>
          </div>
          <aside>
            <button className="mediumbtn">+ ajouter</button>
            <button className="mediumbtn">x suppr</button>
            <figure>
              <img src="" alt="" />
            </figure>
          </aside>
        </div>
        <section className="films-similaire">
          <h3> Films similaires</h3>
          <CardMovie film={film} key={film.id} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Movie;
