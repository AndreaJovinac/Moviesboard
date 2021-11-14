import axios from "axios";
import { IoIosTrash, IoMdCreate } from "react-icons/io";
import React, { useState, useEffect } from "react";
import Modal from "./Modal";

function ButtonDelete({ id, film }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const DisplayNone = () => {
    setModalIsOpen(true);
    DeleteMovie();
  };
  const DeleteMovie = () => {
    axios.delete(`http://localhost:3000/movies/${id}`);
  };
  return (
    <div className="ButtonDelete">
      <button onClick={console.log("click")} className="mediumbtn">
        <IoIosTrash /> Supprimer
      </button>
    </div>
  );
}

export default ButtonDelete;
