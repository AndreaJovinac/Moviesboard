import React from "react";
import axios from "axios";
import { IoIosTrash, IoMdCreate } from "react-icons/io";

const ButtonDelete = ({ id }) => {
  const handleDelete = () => {
    axios.delete(`http://localhost:3000/movies/${id}`);
  };
  return (
    <div className="ButtonDelete">
      <button className="mediumbtn">
        <IoIosTrash />
        Supprimer
      </button>
    </div>
  );
};

export default ButtonDelete;
