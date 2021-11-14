import React, { useState, useEffect } from "react";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import axios from "axios";
import "../Styles/Home.css";
import { useParams } from "react-router";
import CardMovie from "../Composants/CardMovie";
import Modal from "../Composants/Modal";
import ButtonDelete from "../Composants/ButtonDelete";

const Home = () => {
  const [film, setFilm] = useState([]);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  // const numberFilm = array.film[0].length();
  const id = film.id;
  const numberFilm = film.length;
  /* Tu déclares un tableau dans lequel il y a 2 proposité qui seront dynamisé */
  useEffect(() => {
    axios //  La bibliothéque AXIOS : te permet faire gérer l'appel à a demande
      .get("http://localhost:3000/movies") // On mets l'URL du serveur
      .then((response) => setFilm(response.data)); // Tu me récupères la reponse dans lequel il y a toutes les données
  }, []);
  console.log(film[0]); // On teste voir si il y a tous les films concernés
  console.log(id);
  console.log(film.length);
  return (
    <div className="home">
      <Header />
      {modalIsOpen && (
        <Modal setModalIsOpen={setModalIsOpen} key={film.id} id={film.id} />
      )}
      <section className="section">
        <div className="overlay">
          <div className="content-section">
            <h1> Rechercher votre film</h1>
            <form className="form-hom">
              <select id="catagorie" name="categorie">
                <option value="action">Action</option>
                <option value="animation">Animation</option>
                <option value="horreur">Horreur</option>
                <option value="drame">Drame</option>
              </select>
              <input placeholder="Tapez votre mot de recherche"></input>

              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2021-11-01"
                max="2021-11-01"
              />
              <button className="largebtn" id="search" type="submit">
                Rechercher
              </button>
            </form>
          </div>
        </div>
      </section>
      <section className="body-card">
        <div className="content-section-2">
          <div className="text-content">
            <h1> Bibliothèque de vos films</h1>
            <p>
              Vous avez actuellement <b> {numberFilm} </b>films dans votre
              bibliothèque
            </p>
          </div>
          <div className="card-content">
            {film &&
              film.map((film, id) => (
                <CardMovie
                  setModalIsOpen={setModalIsOpen}
                  film={film}
                  key={film.id}
                  id={film.id}
                />
                /* Pour pouvoir sélectionner tous les films il faut faire un map et récuréer */
              ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
