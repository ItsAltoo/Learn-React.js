import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Card from "./components/Card";
import { Nav } from "react-bootstrap";

const App = () => {
  return (
    <div>
      <div className="introBg">
        <Navbar />
        <Card/>
      </div>

      <div className="gallery"></div>
    </div>
  );
};

export default App;
