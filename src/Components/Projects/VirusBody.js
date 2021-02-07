import React from "react";
import { Link } from "react-router-dom";

export default class VirusBody extends React.Component {
  render() {
    return (
      <div className="child">
        <br />
        <div className="row" id="homebutton">
          <Link to="/">
            <button className="btn btn-lg button-right">
              <span className="lead">Home</span>
            </button>
          </Link>
        </div>
        <h3 className="change-font-2">SIMPLE ANTIVIRUS</h3>
        <br />
        <div className="row">
          <div className="">
            <a
              href="https://github.com/dhruvibakeri/antivirus"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-dark home-button">Github Repo</button>
            </a>
          </div>
        </div>
        <div className="change-font-2 text-center text-medium text-pad">
          <br />
          <br />
          This was a part of a class Project for the Foundations of
          Cybersecurity class at Northeastern.
          <ul className="text-left">
            <br />
            <br />
            <li>I created a simple antivirus software with python.</li>
            <li>
              When provided a list of malicious binaries, it scans them and then
              creates a signature that would be used to distinguish them from
              safe binaries.
            </li>
            <li>
              Using this signature, when given a list of mixed binaries
              (malicious and non-malicious), it can identify the malicious ones.
            </li>
          </ul>
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
