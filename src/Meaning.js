import React from "react";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="Definition">{definition.definition}</div>
            <br />
            <div className="Example">
              <em>{definition.example}</em>
            </div>
            <br />
          </div>
        );
      })}
    </div>
  );
}
