import React from "react";

import "./Synonyms.css";

export default function Synonyms(props) {
  if (props.synonyms) {
    return (
      <div className="Synonyms">
        <ul>
          {props.synonyms.map(function (synonym, index) {
            return <li key={index}>{synonym}, </li>;
          })}
        </ul>
      </div>
    );
  } else {
    return null;
  }
}
// might make that small into a ul/li to list the synonyms...
