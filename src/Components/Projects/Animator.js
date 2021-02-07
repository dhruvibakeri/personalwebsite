import React from "react";
import AnimatorBody from "./AnimatorBody";

export default class Animator extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <AnimatorBody />
        </div>
      </div>
    );
  }
}
