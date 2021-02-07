import React from "react";
import RobotBody from "./RobotBody";

export default class Robot extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <RobotBody />
        </div>
      </div>
    );
  }
}
