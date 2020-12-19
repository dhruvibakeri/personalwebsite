import React from "react";
import MenuItems from "./MenuItems";

export default class Recipes extends React.Component {
  noMenuJSX = "";

  render() {
    return (
      <div className="child">
        <MenuItems noMenu={this.noMenuJSX} defaultView={false} />
      </div>
    );
  }
}
