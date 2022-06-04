import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Rentals from "./pages/Rentals";
import "./App.css";


//this is declaration of app component
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} /> { /*element will be the component that will get rendered when the following path is present*/}
      <Route path="/rentals" element={<Rentals />} />{" "}
    </Routes>
  );
};

export default App;
