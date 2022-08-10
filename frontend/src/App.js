import React from "react";
import Home from './pages/home/Home'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
// import Login from "./pages/Login";
// import Register from "./pages/Register";
// import { Routes, Route } from 'react-router-dom'
import { theme } from './ui/theme'
import { ThemeProvider } from 'styled-components';

function App() {
  return (
    <>
      <ThemeProvider theme={theme}>
        <Header />
        <Home />
        {/* 
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registro" element={<Register />} />
        </Routes>
        */}
        <Footer />
      </ThemeProvider>
    </>
  );

}

export default App;