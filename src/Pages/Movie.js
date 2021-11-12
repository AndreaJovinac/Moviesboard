import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import CardMovie from "../Composants/CardMovie";
import Modal from "../Composants/Modal";
import "../Styles/Movie.css";
import { useParams } from "react-router";
import Date from "../Services/Date";
import { IoIosTrash, IoMdCreate, IoIosArrowBack } from "react-icons/io";
import { Link } from "react-router-dom";

const Movie = () => {
  const [film, setFilm] = useState([]);
  const { id } = useParams(); // une fonction qui récupére les paramètres de l'URL
  //const id = film[0].id;
  /* Tu déclares un tableau dans lequel il y a 2 proposité qui seront dynamisé */
  useEffect(() => {
    axios //  La bibliothéque AXIOS : te permet faire gérer l'appel à a demande
      .get(`http://localhost:3000/movies/${id}`) // On mets l'URL du serveur
      .then((response) => setFilm(response.data)); // Tu me récupères la reponse dans lequel il y a toutes les données
  }, []);
  console.log(film); // On teste voir si il y a tous les films concernés
  //console.log(id);
  console.log(film.actors);
  const actors = film.actors;
  console.log(actors);
  const similar = film.similar_movies;

  console.log(similar);
  return (
    <div className="movie">
      <Modal />
      <Header />
      <div className="content-movie">
        <section className="nav-buttn">
          <Link exact to="/">
            <button className="mediumbtn">
              {" "}
              <IoIosArrowBack /> Retour
            </button>
          </Link>
          <div className="btns">
            <button id="edit" className="mediumbtn">
              <IoMdCreate /> modifier
            </button>
            <button className="mediumbtn">
              <IoIosTrash /> Supprimer
            </button>
          </div>
        </section>
        <div className="data-movie">
          <div className="movie">
            <h2> {film.title}</h2>
            <time> Date de sortie : {Date.DateForm(film.release_date)} </time>
            <p id="categories">
              {film.categories && film.categories.join(", ")}
            </p>
            <p> {film.description} </p>
            <section className="actors">
              <h3> Acteurs </h3>
              <section className="section-actor">
                {/* Il faut faire un map pour pouvoir récupérer toutes les acteurs du film */}
                {film.actors &&
                  film.actors.map(({ character, name, photo }, index) => (
                    <div className="actor">
                      <img className="img-actor" src={photo} alt={name} />
                      <div className="content-actors">
                        <h5 className="titrecard">{name} </h5>
                        <p>{character}</p>
                      </div>
                    </div>
                  ))}
              </section>
            </section>
          </div>
          <aside>
            <figure>
              <img src={film.poster} alt={film.title} />
            </figure>
          </aside>
        </div>
        <section className="films-similaire">
          <h3> Films similaires</h3>
          {/* Il faut faire un map pour pouvoir récupérer toutes les acteurs du film */}
          {similar &&
            similar.map(({ title, poster, release_date, index }) => (
              <div className="cardmovie">
                <figure
                  className="poster-similar"
                  style={{ backgroundImage: "url(" + poster + ")" }}
                >
                  <img src="" alt="" />
                </figure>
                <div className="content">
                  <h5 className="titrecard"> {title} </h5>
                  <time> Date de sortie : {Date.DateForm(release_date)}</time>
                </div>
              </div>
            ))}
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default Movie;
