import React from "react";

import "./Photos.css";

export default function Photos(props) {
  if (props.photos) {
    return (
      <div className="Photos">
        <div className="row">
          {props.photos.map(function (photo, index) {
            return (
              <div className="col-6" key={index}>
                <a href={photo.src.original} target="blank" rel="roreferrer">
                  <img
                    src={photo.src.tiny}
                    className="img-fluid"
                    alt={photo.src.photographer}
                    title={photo.alt}
                  />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    );
  } else {
    return (
      <div className="Photos">
        <em>Photos go here...</em>
      </div>
    );
  }
}
