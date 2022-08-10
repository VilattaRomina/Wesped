import React from "react";
import './App.css';
import Header from "./components/header/Header";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
//import { Routes, Route } from 'react-router-dom'
import Footer from "./components/footer/Footer";


function App() {
  return (
    <>
      <Header />
      {/* <Routes> */}
      {/* <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} /> */}
      {/* </Routes> */}
      <Footer />
    </>
  );

}

export default App;
