import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";
import Home from "./Pages/Home";
import Movie from "./Pages/Movie";
import New from "./Pages/New";
import Edit from "./Pages/Edit";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/Movie/" element={<Movie />} />
          <Route path="/New" element={<New />} />
          <Route path="/Edit" element={<Edit />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
