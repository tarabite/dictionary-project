import React from "react";
import SearchForm from "./SearchForm";

import "./App.css";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Dictionary</h1>
        <h2>Type a word to look up...</h2>
        <SearchForm />
      </header>
    </div>
  );
}

export default App;
