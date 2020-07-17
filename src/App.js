import React, { useState } from "react";
import "./App.css";
import DashboardMenu from "./components/dashboardmenu";
import Login from "./components/login";
import Navbar from "./components/navbar";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  console.log("isLoggedIn", isLoggedIn);

  const logOut = () => {
    setIsLoggedIn(false);
  };

  const toggleLogin = () => {
    setIsLoggedIn(!isLoggedIn);
  };
  return (
    <div className="App">
      <Navbar logOut={logOut} />
      {isLoggedIn ? <DashboardMenu /> : <Login setLoggedIn={toggleLogin} />}
    </div>
  );
}

export default App;
