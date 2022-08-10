import React from "react";
import Header from "./components/header/Header";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>
      {/* <BrowserRouter> */}
      <Header />
      {/* <Routes> */}
      {/* <Route path="/login" element={<Login />} />
        <Route path="/registro" element={<Register />} /> */}
      {/* </Routes> */}
      <Footer />
      {/* </BrowserRouter> */}
    </>
  );

}

export default App;
