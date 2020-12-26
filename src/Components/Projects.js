import React from "react";
import MenuItems from "./MenuItems";
import CardComponent from "./CardComponent";
import project from "../images/project.jpg";

export default class Projects extends React.Component {
  noMenuJSX = "";
  render() {
    return (
      <div className="child">
        <div className="same-line-elements">
          <h1 className="change-font heading-place font-weight-bold">
            Projects
          </h1>
          <MenuItems noMenu={this.noMenuJSX} defaultView={false} />
        </div>
        <CardComponent
          rowOrientation="right"
          listOfCards={[
            { image: project, id: 0 },
            { image: project, id: 1 },
            { image: project, id: 2 },
            { image: project, id: 3 },
            { image: project, id: 4 },
            { image: project, id: 5 },
            { image: project, id: 6 },
            { image: project, id: 7 },
          ]}
        />
        <br />
      </div>
    );
  }
}
