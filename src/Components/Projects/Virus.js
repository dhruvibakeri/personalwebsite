import React from "react";
import VirusBody from "./VirusBody";

export default class Virus extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <VirusBody />
        </div>
      </div>
    );
  }
}
