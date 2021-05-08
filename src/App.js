import React from "react";
import Weather from "./Weather";
import Footer from "./Footer";
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="weather-app">
          <Weather defaultCity="London" />      
          <hr />
          <Footer />
        </div>
      </div>
    </div>
  );
}

export default App;