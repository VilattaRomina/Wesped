import React from "react";
import Header from "./components/header/Header";
import Footer from './components/footer/Footer'
import Login from "./pages/Login";
import Register from "./pages/Register";
import { Routes, Route } from 'react-router-dom'

function App() {

  return (
    <>
      <Header />
      <Routes Routes >
        <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} />
      </Routes >
      <Footer />
    </>
  );

}

export default App;
