import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
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
