import React, { useState, useEffect } from "react";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import axios from "axios";
import "../Styles/New.css";
import { Link } from "react-router-dom";
import { IoIosArrowBack } from "react-icons/io";

const New = () => {
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
            <form className="form-new">
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
