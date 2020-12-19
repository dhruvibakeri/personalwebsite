import React from "react";
import MenuItems from "./MenuItems";

export default class Projects extends React.Component {
  noMenuJSX = "";
  render() {
    return (
      <div className="child">
        <MenuItems noMenu={this.noMenuJSX} defaultView={false} />
      </div>
    );
  }
}
