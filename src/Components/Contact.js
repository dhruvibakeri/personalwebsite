import React from "react";

export default class Contact extends React.Component {
  noMenuJSX = "";
  render() {
    return (
      <div className="child">
        <br />
        <div className="contact-padding">
          <div className="same-line-elements" id="contact-icons">
            <a
              href="https://github.com/dhruvibakeri"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-github fa-3x" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.linkedin.com/in/dhruvibakeri/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-linkedin-square fa-3x" aria-hidden="true"></i>
            </a>
            <a
              href="https://www.instagram.com/dhruvibakeri/"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-instagram fa-3x" aria-hidden="true"></i>
            </a>
            <a
              href="https://twitter.com/Dhruvi_2610"
              target="_blank"
              rel="noreferrer"
            >
              <i className="fa fa-twitter fa-3x" aria-hidden="true"></i>
            </a>
            <a href="mailto: bakeri.d@northeastern.edu">
              <i className="fa fa-envelope fa-3x" aria-hidden="true"></i>
            </a>
          </div>
          <br />
        </div>
      </div>
    );
  }
}
