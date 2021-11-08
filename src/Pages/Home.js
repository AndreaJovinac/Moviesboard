import React from "react";
import Header from "../Composants/Header";
import "../Styles/Home.css";
import Img from "../Images/netflix-image.jpeg";

function Home() {
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
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
