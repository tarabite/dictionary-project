import React from "react";

import "./Photos.css";

export default function Photos(props) {
  console.log(props.photos);

  if (props.photos) {
    return (
      <div className="Photos">
        <div className="container">
          <div className="row">
            {props.photos.map(function (photo, index) {
              return (
                <div className="col-6 fluid" key={index}>
                  <a href={photo.src.original} target="blank" rel="roreferrer">
                    <img
                      src={photo.src.tiny}
                      className="image-fluid"
                      alt={photo.alt}
                      title={photo.alt}
                    />
                  </a>
                </div>
              );
            })}
          </div>
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
