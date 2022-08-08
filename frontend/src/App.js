import React, { useState } from "react";
import Header from "./components/layout/Header";
import Login from "./pages/Login";

function App() {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <>
      <Header isLogin={isLogin} />
      <Login />
    </>
  );
}

export default App;
