import React from "react";

import "./Phonetics.css";

export default function Phonetics(props) {
  return (
    <div className="Phonetics">
      <span className="PhoneticAudio">
        <a href={props.phonetic.audio} target="blank">
          <i class="far fa-play-circle"></i>
        </a>
      </span>
      <span className="PhoneticLatin">| {props.phonetic.text} |</span>
    </div>
  );
}
