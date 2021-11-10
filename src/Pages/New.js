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
              <label for="">Titre du film</label>
              <input type="" name="" value="" />
            </form>
          </div>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default New;
