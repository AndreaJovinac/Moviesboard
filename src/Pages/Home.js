import React, { useState, useEffect } from "react";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import axios from "axios";
import "../Styles/Home.css";
import CardMovie from "../Composants/CardMovie";

const Home = () => {
  const [film, setFilm] = useState([]);

  const id = "";
  /* Tu déclares un tableau dans lequel il y a 2 proposité qui seront dynamisé */
  useEffect(() => {
    axios //  La bibliothéque AXIOS : te permet faire gérer l'appel à a demande
      .get("http://localhost:3000/movies") // On mets l'URL du serveur
      .then((response) => setFilm(response.data)); // Tu me récupères la reponse dans lequel il y a toutes les données
  }, []);
  console.log(film); // On teste voir si il y a tous les films concernés

  return (
    <div className="home">
      <Header />
      <section className="section">
        <div className="overlay">
          <div className="content-section">
            <form>
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
              <button className="largebtn" type="submit">
                {" "}
                Valider{" "}
              </button>
            </form>
          </div>
        </div>
      </section>
      <section classNamem="">
        <div className="content-section-2">
          <div className="text-content">
            <h1> Résultat de votre recherche</h1>
            <p>Il y a 5 résultats</p>
          </div>

          {film.map((film, id) => (
            <CardMovie film={film} key={film.id} />
            /* Pour pouvoir sélectionner tous les films il faut faire un map et récuréer */
          ))}
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
