import React from "react";
import FishColyBody from "./FishColyBody";

export default class FishColy extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <FishColyBody />
        </div>
      </div>
    );
  }
}
