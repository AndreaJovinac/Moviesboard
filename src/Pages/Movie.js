import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import CardMovie from "../Composants/CardMovie";
import "../Styles/Movie.css";

const Movie = () => {
  const [film, setFilm] = useState([]);
  /* Tu déclares un tableau dans lequel il y a 2 proposité qui seront dynamisé */
  useEffect(() => {
    axios //  La bibliothéque AXIOS : te permet faire gérer l'appel à a demande
      .get("http://localhost:3000/movies") // On mets l'URL du serveur
      .then((response) => setFilm(response.data)); // Tu me récupères la reponse dans lequel il y a toutes les données
  }, []);
  console.log(film); // On teste voir si il y a tous les films concernés
  return (
    <div className="movie">
      <Header />
      <div className="content-movie">
        <button>Retour</button>
        <div className="movie">
          <h2> Titre</h2>
          <time> date de sortie </time>
          <p> tag</p>
          <p> Description</p>
          <h3> Acteurs </h3>
          <ul>
            <li></li>
          </ul>
        </div>
        <aside>
          <button>+ ajouter</button>
          <button>x suppr</button>
          <figure>
            <img src="" alt="" />
          </figure>
        </aside>
        <section>
          <h3> Films similaires</h3>
          <CardMovie film={film} key={film.id} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Movie;
