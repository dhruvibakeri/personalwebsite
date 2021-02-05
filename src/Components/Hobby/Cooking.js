import React from "react";
import CookingBody from "./CookingBody";

export default class Cooking extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <CookingBody />
        </div>
      </div>
    );
  }
}
