import React, { useState, useEffect } from "react";
import Header from "../Composants/Header";
import Footer from "../Composants/Footer";
import axios from "axios";
import "../Styles/Home.css";
import CardMovie from "../Composants/CardMovie";

const Home = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3000/movies")
      .then((response) => setData(response.data));
  }, []);
  console.log(data);

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
              {/* <DatePicker /> */}
              <input
                type="date"
                id="start"
                name="trip-start"
                value="2018-07-22"
                min="2018-01-01"
                max="2018-12-31"
              />
              <button type="submit"> Valider </button>
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
          <CardMovie />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Home;
