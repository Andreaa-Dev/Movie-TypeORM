import React from "react";
import { Routes, Route } from "react-router-dom";

import LandingPage from "./components/landingPage";
import NavBar from "./components/navbar";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/home" element={<NavBar />} />
      </Routes>
    </div>
  );
}

export default App;
