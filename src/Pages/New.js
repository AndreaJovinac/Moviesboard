import React, { useState, useEffect } from "react";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import axios from "axios";
import "../Styles/New.css";
import CardMovie from "../Composants/CardMovie";

const New = () => {
  return (
    <div className="new-section">
      <Header />

      <section classNamem="">
        <div className="content-section-2">
          <section className="nav-buttn">
            <button className="mediumbtn"> Retour</button>
          </section>
          <div className="text-content">
            <h1>Ajouter un film</h1>
            <form className="form-new">
              <label for="titre">Titre du film</label>
              <input
                type="text"
                name="titre"
                placeholder="Tapez le nom du film"
              />
              <label for="">Date de publication</label>
              <input type="date" />
              <button className="largebtn" type="submit">
                {" "}
                Envoyer
              </button>
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default New;
