import React, { useState, useEffect } from "react";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import { Link } from "react-router-dom";
import axios from "axios";
import "../Styles/Home.css";
import CardMovie from "../Composants/CardMovie";

const Error = () => {
  return (
    <div className="home">
      <Header />
      <section classNamem="">
        <div className="content-section-2">
          <div className="text-content">
            <h1> Erreur 404 </h1>
            <p>
              {" "}
              Oups, vous êtes égarés.
              <div className="retourne-app">
                <Link exact to="/">
                  <button className="mediumbtn">
                    Revenir s la page d'accueil
                  </button>
                </Link>
              </div>
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Error;
