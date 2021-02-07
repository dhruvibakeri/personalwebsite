import React from "react";
import SunsetBody from "./SunsetBody";

export default class Sunset extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <SunsetBody />
        </div>
      </div>
    );
  }
}
