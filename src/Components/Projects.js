import React from "react";
import MenuItems from "./MenuItems";
import CardComponent from "./CardComponent";
import fishcoly from "../images/fish-coly.png";
import fishremote from "../images/fish-remote.png";
import travelweb from "../images/travelweb.png";
import personalweb from "../images/personalweb.png";
import animator from "../images/animator.png";
import virus from "../images/virus.png";
import robot from "../images/robot.png";

export default class Projects extends React.Component {
  noMenuJSX = "";
  render() {
    return (
      <div className="child">
        <div className="same-line-elements">
          <h1 className="change-font-2 heading-place font-weight-bold">
            Projects
          </h1>
          <MenuItems noMenu={this.noMenuJSX} defaultView={false} />
        </div>
        <CardComponent
          rowOrientation="right"
          listOfCards={[
            { image: fishcoly, id: 0 },
            { image: fishremote, id: 1 },
            { image: travelweb, id: 2 },
            { image: personalweb, id: 3 },
            { image: animator, id: 4 },
            { image: virus, id: 5 },
            { image: robot, id: 6 },
          ]}
        />
        <br />
      </div>
    );
  }
}
