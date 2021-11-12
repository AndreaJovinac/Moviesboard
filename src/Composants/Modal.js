import React from "react";
import axios from "axios";
import { useState } from "react";

import "../Composants/StyleComposants/Modal.css";
function Modal({ id }) {
  const CloseModal = (e) => {
    e.preventDefault();
    console.log("ferme la modale");
  };

  return (
    <section className="modal-section">
      <div className="modal">
        <p>Confirmation de suppression</p>
        <h3> Êtes-vous sûr de bien vouloir supprimer ?</h3>
        <button className="medium-cancel-btn" onClick={CloseModal}>
          Annuler
        </button>
        <button className="mediumbtn"> Supprimer</button>
      </div>
    </section>
  );
}

export default Modal;
