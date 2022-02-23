import React from "react";
import "./App.css";
import { Routes, Route } from "react-router-dom";
import Settings from "./Pages/Settings/settings";

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Settings />} />
      </Routes>
    </div>
  );
}

export default App;
