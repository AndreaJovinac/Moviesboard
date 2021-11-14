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
      <section className="content-new-movie">
        <div className="content-section-2">
          <section className="nav-buttn">
            <Link exact to="/">
              <button className="mediumbtn">
                <IoIosArrowBack /> Retour
              </button>
            </Link>
          </section>
          <div className="text-content">
            <h1>Ajouter un film</h1>
            <p>
              Remplissez le formulaire ci-dessous pour ajouter un nouveau film à
              votre bibliothèque
            </p>
            <form onSubmit={(e) => handleSubmit(e)} className="form-new">
              <label onSubmit={(e) => handleSubmit(e)} for="titre">
                Titre du film
              </label>
              <input
                className="input-form"
                type="text"
                name="titre"
                placeholder="Tapez le nom du film"
                required
              />
              <label for="">Date de sortie</label>
              <input type="date" className="input-form" />
              <div className="section-submit">
                <button id="submit-add" className="largebtn" type="submit">
                  + Ajouter le film
                </button>
              </div>
            </form>

            <form onSubmit={(e) => handleSubmit(e)} className="form-new">
              <label onSubmit={(e) => handleSubmit(e)} for="categorie">
                Catégories
              </label>
              <input
                className="input-form"
                type="text"
                name="titre"
                placeholder="Ajouter vos catégories"
                required
              />
              <label for="">Synopsis</label>
              <textarea
                id="textarea"
                className="input-form"
                type="text"
                rows="8"
              />
              <label for="url">Lien la couverture du film</label>
              <input
                className="input-form"
                type="url"
                name="url"
                id="url"
                placeholder="https://example.com"
                pattern="https://.*"
                size="30"
                required
              ></input>
              <h3>Ajouter les acteurs du film </h3>
              <div className="acteurs-form">
                <div className="acteurs-label">
                  <label onSubmit={(e) => handleSubmit(e)} for="categorie">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="nom-acteur"
                    placeholder="Prénom"
                    required
                  />
                </div>
                <div className="acteurs-label">
                  <label onSubmit={(e) => handleSubmit(e)} for="prenom-acteur">
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="prenom-acteur"
                    placeholder="Nom"
                    required
                  />
                </div>
                <div className="acteurs-label">
                  <label for="url">Lien de l'image</label>
                  <input
                    type="url"
                    name="url"
                    id="url"
                    placeholder="https://example.com"
                    pattern="https://.*"
                    size="30"
                    required
                  ></input>
                </div>
                <button className="mediumbtn">+</button>
              </div>
              <div className="acteurs-form">
                <div className="acteurs-label">
                  <label onSubmit={(e) => handleSubmit(e)} for="categorie">
                    Nom
                  </label>
                  <input
                    type="text"
                    name="nom-acteur"
                    placeholder="Prénom"
                    required
                  />
                </div>
                <div className="acteurs-label">
                  <label onSubmit={(e) => handleSubmit(e)} for="prenom-acteur">
                    Prénom
                  </label>
                  <input
                    type="text"
                    name="prenom-acteur"
                    placeholder="Nom"
                    required
                  />
                </div>
                <div className="acteurs-label">
                  <label for="url">Lien de l'image</label>
                  <input
                    type="url"
                    name="url"
                    id="url"
                    placeholder="https://example.com"
                    pattern="https://.*"
                    size="30"
                    required
                  ></input>
                </div>
                <button className="mediumbtn">+</button>
              </div>
              <h3>Films similaires </h3>
              <div className="similar-form">
                <div className="similar-label">
                  <label onSubmit={(e) => handleSubmit(e)} for="categorie">
                    Nom du film
                  </label>
                  <input
                    type="text"
                    name="nom-acteur"
                    placeholder="Prénom"
                    required
                  />
                </div>
                <div className="similar-label">
                  <label for="url">Lien de l'image du film</label>
                  <input
                    type="url"
                    name="url"
                    id="url"
                    placeholder="https://example.com"
                    pattern="https://.*"
                    size="30"
                    required
                  ></input>
                </div>
                <div className="similar-label">
                  <label for="">Date de sortie</label>
                  <input type="date" />
                </div>
                <button className="mediumbtn">+</button>
              </div>
              <div className="similar-form">
                <div className="similar-label">
                  <label onSubmit={(e) => handleSubmit(e)} for="categorie">
                    Nom du film
                  </label>
                  <input
                    type="text"
                    name="nom-acteur"
                    placeholder="Prénom"
                    required
                  />
                </div>

                <div className="similar-label">
                  <label for="url">Lien de l'image du film</label>
                  <input
                    type="url"
                    name="url"
                    id="url"
                    placeholder="https://example.com"
                    pattern="https://.*"
                    size="30"
                    required
                  ></input>
                </div>
                <div className="similar-label">
                  <label for="">Date de sortie</label>
                  <input type="date" />
                </div>
                <button className="mediumbtn">+</button>
              </div>
              <div className="section-submit">
                <button id="submit-add" className="largebtn" type="submit">
                  Valider
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default New;
