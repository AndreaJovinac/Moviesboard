import React from "react";
import "../Composants/StyleComposants/Modal.css";
function Modal() {
  return (
    <section className="modal-section">
      <div className="modal">
        <p>Confirmation de suppression</p>
        <h3> Êtes-vous sûr de bien vouloir supprimer ?</h3>
        <button className="medium-cancel-btn"> Annuler</button>{" "}
        <button className="mediumbtn"> Supprimer</button>
      </div>
    </section>
  );
}

export default Modal;
