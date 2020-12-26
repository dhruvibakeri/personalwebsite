import React from "react";
import bagel from "../../images/bagel2.JPG";

export default class BagelRecipe extends React.Component {
  render() {
    return (
      <div>
        <h1 className="display-4 bg-light">Whole Wheat Bagels</h1>
        <div className="row">
          <div className="col-1 "></div>
          <div className="col-2">
            <img src={bagel} alt="" className="bagel-photo" />
          </div>
          <div className="col-8">
            <h2>Ingredients</h2>
          </div>
        </div>
      </div>
    );
  }
}
