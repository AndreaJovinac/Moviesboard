import React from "react";
import { NavLink } from "react-router-dom";
import "./StyleComposants/Header.css";

function Header() {
  return (
    <div className="header">
      <div className="content-header">
        <div className="logo">
          <p>MOVIES BOARD</p>
        </div>
        <nav className="nav">
          <NavLink exact to="/search">
            <li className="new"> + Ajouter un film </li>
          </NavLink>
          <NavLink exact to="/favorite">
            <li className="search"> Rechercher </li>
          </NavLink>
        </nav>
      </div>
    </div>
  );
}

export default Header;
