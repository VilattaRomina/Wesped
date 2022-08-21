import React, { useState } from "react";
import Home from './pages/home/Home'
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import Login from "./pages/login/Login";
import Register from "./pages/register/Register";
import { Routes, Route } from 'react-router-dom'
import { theme } from './ui/theme'
import { ThemeProvider } from 'styled-components';
import Product from "./pages/product/Product";

function App() {
  const [loggedUser, setLoggedUser] = useState({ valid: false, email: "" });

  const isLoggedUser = (loggedUser) => {
    setLoggedUser(loggedUser);
  }

  return (
    <>
      <ThemeProvider theme={theme}>
        <Header loggedUser={loggedUser} isLoggedUser={isLoggedUser} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login isLoggedUser={isLoggedUser} />} />
          <Route path="/registro" element={<Register />} />
          <Route path="/producto/*" element={<Product />} />
        </Routes>
        <Footer />
      </ThemeProvider>
    </>
  );

}

export default App;