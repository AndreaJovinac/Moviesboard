import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import CardMovie from "../Composants/CardMovie";
import Actors from "../Composants/Actors";
import "../Styles/Movie.css";

const Movie = (prosp) => {
  const [film, setFilm] = useState([]);
  const id = film.id;

  console.log(id);

  console.log(film);
  //`http://localhost:3000/movies/${id}`

  /* Tu déclares un tableau dans lequel il y a 2 proposité qui seront dynamisé */
  useEffect(() => {
    axios //  La bibliothéque AXIOS : te permet faire gérer l'appel à a demande
      .get("http://localhost:3000/movies/1") // On mets l'URL du serveur
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
            <h2> {film.title}</h2>
            <time> {film.release_date} </time>
            <p id="categories"> {film.categories}</p>
            <p> {film.description} </p>
            <button className="mediumbtn">+ modifier</button>
            <button className="mediumbtn">x suppr</button>
            <h3> Acteurs </h3>
            <Actors film={film} key={film.id} />
          </div>
          <aside>
            <figure style={{ backgroundImage: "url(" + film.poster + ")" }}>
              <img src={film.poster} alt={film.title} />
            </figure>
          </aside>
        </div>
        <section className="films-similaire">
          <h3> Films similaires</h3>
          <CardMovie film={film} key={film.id} id={film.id} />
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Movie;
