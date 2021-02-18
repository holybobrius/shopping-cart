import React from "react"
import "./styles/main.css"
import Navbar from "./components/Navbar"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="main-content">
        <h1>энергосы<span className="h1-span">)))</span></h1>
        <a href="/shop">
          <button className="main-page-button">Go to Catalog</button>
        </a>
      </div>
    </div>
  );
}

export default App;
