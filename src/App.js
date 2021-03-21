import React, { useState } from "react"
import "./styles/main.css"
import Navbar from "./components/Navbar"

function App(props) {
  

  
  return (
    <div className="App">
      <div className="main-content">
        <h1>энергосы<span className="teal-span">)))</span></h1>
        <a href="/shop">
          <button className="main-page-button">Go to Catalog</button>
        </a>
      </div>
      
    </div>
  );
}

export default App;
