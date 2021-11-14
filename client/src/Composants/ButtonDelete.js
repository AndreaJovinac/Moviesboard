import axios from "axios";
import { IoIosTrash, IoMdCreate } from "react-icons/io";
import React, { useState, useEffect } from "react";

const ButtonDelete = ({ id }) => {
  const DisplayNone = () => {
    setModalIsOpen(true);
  };
  const DeleteMovie = () => {
    axios.delete(`http://localhost:3000/movies/${id}`);
  };
  const [modalIsOpen, setModalIsOpen] = useState(false);
  return (
    <div className="ButtonDelete">
      <button onClick={() => setModalIsOpen(true)} className="mediumbtn">
        <IoIosTrash /> Supprimer
      </button>
    </div>
  );
};

export default ButtonDelete;
