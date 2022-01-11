import React from "react";

export default function Phonetics(props) {
  return (
    <div className="PhoneticAudio">
      <ul>
        <li>
          <a href={props.phonetic.audio} target="blank">
            <i class="far fa-play-circle"></i>
          </a>
        </li>
        <li> {props.phonetic.text}</li>
      </ul>
    </div>
  );
}
