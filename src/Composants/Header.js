import React from "react";
import { Link } from "react-router-dom";
import "./StyleComposants/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="content-header">
        <div className="logo">
          <Link exact to="/">
            <p>MOVIES BOARD</p>
          </Link>
        </div>
        <nav className="nav">
          <Link exact to="/search">
            <li className="new"> + Ajouter un film </li>
          </Link>
          <Link exact to="/favorite">
            <li className="search"> Rechercher </li>
          </Link>
        </nav>
      </div>
    </div>
  );
}

export default Header;
