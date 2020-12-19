import React from "react";
import CardComponent from "./CardComponent";
import MenuItems from "./MenuItems";
import bagel from "../images/bagel.JPG";
import pestoswirl from "../images/pestoswirl.jpg";
import buns from "../images/buns.jpg";
import foccrumb from "../images/focacciacrumb.jpg";
import naan from "../images/naan.jpg";
import innout from "../images/innout.jpg";
import bao from "../images/bao.jpg";
import noodles from "../images/noodles.jpg";
import podidosa from "../images/podidosa.jpg";
import pizza from "../images/pizza.jpg";

export default class Recipes extends React.Component {
  noMenuJSX = "";

  render() {
    return (
      <div className="child">
        <div className="same-line-elements">
          <h1 className="change-font heading-place">Recipes</h1>
          <MenuItems noMenu={this.noMenuJSX} defaultView={false} />
        </div>
        <CardComponent
          listOfCards={[
            { image: bagel, id: 0 },
            { image: pestoswirl, id: 1 },
            { image: buns, id: 2 },
            { image: foccrumb, id: 3 },
            { image: naan, id: 4 },
            { image: innout, id: 5 },
            { image: bao, id: 6 },
            { image: noodles, id: 7 },
            { image: podidosa, id: 8 },
            { image: pizza, id: 9 },
          ]}
        />
        <br />
      </div>
    );
  }
}
