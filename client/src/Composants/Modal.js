import React from "react";
import axios from "axios";
import { useState } from "react";
import ButtonDelete from "../Composants/ButtonDelete";
import "../Composants/StyleComposants/Modal.css";

function Modal({ setModalIsOpen, id, film }) {
  console.log(id);
  const DeleteMovie = () => {
    axios.delete(`http://localhost:3000/movies/${id}`);
    window.location.reload();
  };
  return (
    <section className="modal-section">
      <div className="modal">
        <p>Confirmation de suppression</p>
        <h3> Êtes-vous sûr de bien vouloir supprimer ce film ?</h3>
        <button
          onClick={() => setModalIsOpen(false)}
          className="medium-cancel-btn"
        >
          Annuler
        </button>
        <button onClick={DeleteMovie()} id="suppr-button" className="mediumbtn">
          Supprimer
        </button>
      </div>
    </section>
  );
}

export default Modal;
// let ModalOn = "";
// const CloseModal = (e) => {
//   e.preventDefault();
//   console.log("wesh");
//   this.Modal.isCLose();
//   // this.ThisModal.isClose();
// }

//   return (
//     <section className="modal-section" style={{ ModalOn }}>
//       <div className="modal" style={{ ModalOn }}>
//         <p>Confirmation de suppression</p>
//         <h3> Êtes-vous sûr de bien vouloir supprimer ?</h3>
//         <button className="medium-cancel-btn" onClick={CloseModal}>
//           Annuler
//         </button>
//         <ButtonDelete />
//       </div>
//     </section>
//   );
// }
