import React, { useState, useEffect } from "react";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import axios from "axios";
import "../Styles/New.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";
import ReactChipInput from "react-chip-input";

const New = () => {
  // Methode qui va récupérer les donnees dans les inputs du formulaire
  const handleSubmit = (e) => {
    e.preventDefault();
    // Permet de ne pas recharger la page à chaque fois
    console.log(e.target);
    // axios.post("http://localhost:3000/movies", {
    //   console.console.log();
    // });
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
              <label onSubmit={(e) => handleSubmit(e)} for="titre">
                Titre du film
              </label>
              <input
                type="text"
                name="titre"
                placeholder="Tapez le nom du film"
                required
              />
              <label for="">Date de sortie</label>
              <input type="date" />
              <label onSubmit={(e) => handleSubmit(e)} for="categorie">
                Catégories
              </label>
              <button id="submit-add" className="largebtn" type="submit">
                + Ajouter le film
              </button>
              <hr />
              <input
                type="text"
                name="titre"
                placeholder="Ajouter vos catégories"
                required
              />

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
