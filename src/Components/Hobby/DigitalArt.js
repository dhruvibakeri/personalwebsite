import React from "react";
import DigitalArtBody from "./DigitalArtBody";

export default class DigitalArt extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <DigitalArtBody />
        </div>
      </div>
    );
  }
}
