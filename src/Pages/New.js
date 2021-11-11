import React, { useState, useEffect } from "react";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import axios from "axios";
import "../Styles/New.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const New = () => {
  // Methode qui va récupérer les donnees dans les inputs du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Permet de ne pas recharger la page à chaque fois
    console.log("wesh");
    axios.post("http://localhost:3000/movies", {
      title: "Get Out",
      release_date: "2019-03-45",
      categories: ["Action", "Aventure", "Science-Fiction"],
      description:
        "Test :::Pater et ses amis passent leurs vacances d’été en Europe. Mais ils n’auront pas vraiment l’occasion de se reposer puisque Peter accepte d’aider Nick Fury pour débusquer les mystérieuses créatures qui sont la cause des catastrophes naturelles qui frappent le continent.",
      poster: "https://image.tmdb.org/t/p/w342/zrNKUa5SBUwue39coJArNdDgQJM.jpg",
      backdrop:
        "https://image.tmdb.org/t/p/w342/5myQbDzw3l8K9yofUXRJ4UTVgam.jpg",
      actors: [
        {
          name: "Tom Holland",
          photo:
            "https://image.tmdb.org/t/p/w342/ip7aXVH8s6wXv8cY6KI14OZgCI8.jpg",
          character: "Peter Parker / Spider-Man",
        },
        {
          name: "Samuel L. Jackson",
          photo:
            "https://image.tmdb.org/t/p/w342/mXN4Gw9tZJVKrLJHde2IcUHmV3P.jpg",
          character: "Nick Fury",
        },
        {
          name: "Jake Gyllenhaal",
          photo:
            "https://image.tmdb.org/t/p/w342/rJdYHYNhlcOBwbPvDZVvt1xw7bi.jpg",
          character: "Quentin Beck / Mysterio",
        },
        {
          name: "Marisa Tomei",
          photo:
            "https://image.tmdb.org/t/p/w342/nrRXQkCWVXQVIHhYMhEjOWehJCH.jpg",
          character: "May Parker",
        },
        {
          name: "Jon Favreau",
          photo:
            "https://image.tmdb.org/t/p/w342/8MtRRnEHaBSw8Ztdl8saXiw1egP.jpg",
          character: 'Harold "Happy" Hogan',
        },
        {
          name: "Zendaya",
          photo:
            "https://image.tmdb.org/t/p/w342/r3A7ev7QkjOGocVn3kQrJ0eOouk.jpg",
          character: 'Michelle "MJ" Jones',
        },
      ],
      similar_movies: [
        {
          title: "X-Men: Apocalypse",
          poster:
            "https://image.tmdb.org/t/p/w342/2mtQwJKVKQrZgTz49Dizb25eOQQ.jpg",
          release_date: "2016-05-18",
        },
        {
          title: "Captain Marvel",
          poster:
            "https://image.tmdb.org/t/p/w342/AtsgWhDnHTq68L0lLsUrCnM7TjG.jpg",
          release_date: "2019-03-06",
        },
        {
          title: "Superman Returns",
          poster:
            "https://image.tmdb.org/t/p/w342/6ZYOpyhFZrAQIe1BuhqVgzfAdGZ.jpg",
          release_date: "2006-06-28",
        },
      ],
      id: 3,
    });
  };

  return (
    <div className="new-section">
      <Header />

      <section classNamem="">
        <div className="content-section-2">
          <section className="nav-buttn">
            <Link exact to="/">
              <button className="mediumbtn">
                {" "}
                <IoIosArrowBack /> Retour
              </button>
            </Link>
          </section>
          <div className="text-content">
            <h1>Ajouter un film</h1>
            <p>
              Vous pouvez ajouter un nouveau à votre bibliothèque Movies Board
              en remplissant le formulaire ci-dessous.{" "}
            </p>
            <form onSubmit={(e) => handleSubmit(e)} className="form-new">
              <label for="titre">Titre du film</label>
              <input
                type="text"
                name="titre"
                placeholder="Tapez le nom du film"
              />
              <label for="">Date de sortie</label>
              <input type="date" />
              <button id="submit-add" className="largebtn" type="submit">
                {" "}
                + Ajouter le film
              </button>
              <h3> Plus de saisies</h3>
              <label for="">Description</label>
              <textarea type="text" />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default New;
