import React from "react";
import Dictionary from "./Dictionary";

import "./App.css";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <main>
          <Dictionary defaultKeyword="word" />
        </main>
      </div>
      <footer className="App-footer">
        <small>
          Coded by Tara Diego. Hosted on{" "}
          <a
            href="https://github.com/tarabite/dictionary-project"
            alt="Tara Diego's Dictionary project on GitHub"
            target="blank"
            title="Click to visit Tara's GitHub profile"
          >
            Github
          </a>{" "}
          and{" "}
          <a
            href="https://agitated-spence-006f7c.netlify.app"
            alt="Copy and share this link from Netlify"
            target="blank"
            title="Click to visit Tara's GitHub profile"
          >
            Netlify
          </a>
          .
        </small>
      </footer>
    </div>
  );
}
