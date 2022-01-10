import React from "react";
import Synonyms from "./Synonyms";

import "./Meaning.css";

export default function Meaning(props) {
  console.log(props.meaning);

  return (
    <div className="Meaning">
      <h3>{props.meaning.partOfSpeech}</h3>
      {props.meaning.definitions.map(function (definition, index) {
        return (
          <div key={index}>
            <div className="Definition">
              <strong>Definition: </strong>
              {definition.definition}
            </div>
            <br />
            <div className="Example">
              <em>
                <strong>Example: </strong>
                {definition.example}
              </em>
            </div>
            <br />
            <Synonyms synonyms={definition.synonyms} />
            <br />
          </div>
        );
      })}
    </div>
  );
}
