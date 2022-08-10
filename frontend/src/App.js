import React from "react";
import Header from "./components/header/Header";
import SearchBlock from './pages/home/searchBlock/SearchBlock';
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
      <SearchBlock />
      <Footer />
    </>
  );

}

export default App;
