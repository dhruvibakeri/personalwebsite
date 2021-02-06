import React from "react";
import GardenBody from "./GardenBody";

export default class Garden extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <GardenBody />
        </div>
      </div>
    );
  }
}
