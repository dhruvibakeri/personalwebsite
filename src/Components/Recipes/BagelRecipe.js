import React from "react";
import BagelRecipeBody from "./BagelRecipeBody";

export default class BagelRecipe extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <BagelRecipeBody />
        </div>
      </div>
    );
  }
}
