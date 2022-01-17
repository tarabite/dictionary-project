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
          <div className="Credit">Coded by Tara Diego.</div>
          <div className="WeatherLink">
            <a
              href="https://stupefied-goodall-8299c5.netlify.app"
              alt="Tara's Weather App built with React"
              target="blank"
              title="Click to visit Tara's React Weather App for SheCodes"
            >
              <i class="fas fa-cloud-showers-heavy"></i> Check out my React
              Weather App <i class="fas fa-cloud-showers-heavy"></i>
            </a>
          </div>
          <div className="Github">
            Open-sourced on{" "}
            <a
              href="https://github.com/tarabite/dictionary-project"
              alt="Tara Diego's Dictionary project on GitHub"
              target="blank"
              title="Click to visit Tara's GitHub profile"
            >
              Github
            </a>
            .
          </div>
          <div className="Netlify">
            Hosted on{" "}
            <a
              href="https://agitated-spence-006f7c.netlify.app"
              alt="Copy and share this link from Netlify"
              target="blank"
              title="Click to visit Tara's GitHub profile"
            >
              Netlify
            </a>
            .
          </div>
        </small>
      </footer>
    </div>
  );
}
