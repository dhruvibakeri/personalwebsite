import React from "react";
import BreadBody from "./BreadBody";

export default class Bread extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <BreadBody />
        </div>
      </div>
    );
  }
}
