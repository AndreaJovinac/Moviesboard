import React, { useState, useEffect } from "react";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import axios from "axios";
import "../Styles/Home.css";
import CardMovie from "../Composants/CardMovie";

const New = () => {
  return (
    <div className="new-section">
      <Header />
      <section classNamem="">
        <div className="content-section-2">
          <div className="text-content">
            <h1>Ajouter une page</h1>

            <form>
              <label for="titre">Titre du film</label>
              <input type="text" name="titre" value="Tapez le nom du film" />
              <label for="">Date de publication</label>
              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2021-11-01"
                max="2021-11-01"
              />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default New;
