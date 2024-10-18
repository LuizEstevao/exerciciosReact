import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import TelaInicial from "./components/TelaInicial";
import Exercicio from "./components/Exercicio";
import "./App.css";
import Todos from "./components/Todos";

function App02() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TelaInicial />} />
        <Route path="/exercicio/:numero" element={<Exercicio />} />
        <Route path="/todos" element={<Todos />} />
      </Routes>
    </Router>
  );
}

export default App02;
