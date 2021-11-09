import React, { useState, useEffect } from "react";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import axios from "axios";
import "../Styles/Home.css";
import CardMovie from "../Composants/CardMovie";

const Movie = () => {
  return (
    <div className="movie">
      <Header />

      <Footer />
    </div>
  );
};

export default Movie;
