import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary />
        </main>
        <footer className="App-footer">
          <small>Coded by Tara Diego</small>
        </footer>
      </div>
    </div>
  );
}

export default App;