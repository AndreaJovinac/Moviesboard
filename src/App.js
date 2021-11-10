import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import New from "./Pages/New";
import Edit from "./Pages/Edit";
import Error from "./Pages/Error";

function App(prosp) {
  const film = prosp;
  const id = film.id;
  console.log(id);
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/New" element={<New />} />
          <Route path="/Edit" element={<Edit />} />
          <Route path="*" element={<Error />} />
          <Route path="/movies/:*" element={<Error />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
