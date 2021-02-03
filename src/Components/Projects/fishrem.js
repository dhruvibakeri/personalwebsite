import React from "react";
import FishRemBody from "./FishRemBody";

export default class FishRem extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <FishRemBody />
        </div>
      </div>
    );
  }
}
