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
    //<MenuItems noMenu={this.noMenuJSX} defaultView={false} />
    return (
      <div className="child">
        <div className="same-line-elements">
          <h1 className="change-font heading-place font-weight-bold">
            Recipes
          </h1>
        </div>
        <CardComponent
          listOfCards={[
            { image: bagel, id: 0, label: "Whole wheat bagels" },
            { image: pestoswirl, id: 1, label: "Pesto Swirl loaf" },
            { image: buns, id: 2, label: "Burger buns" },
            { image: foccrumb, id: 3, label: "Garlic and Rosemary focaccia" },
            { image: naan, id: 4, label: " Hariyali Naan" },
            { image: innout, id: 5, label: "Veggie Burger" },
            { image: bao, id: 6, label: "Bao buns" },
            { image: noodles, id: 7, label: "Honey chilli noodles" },
            { image: podidosa, id: 8, label: "Ghee Podi Dosa" },
            { image: pizza, id: 9, label: "Pizza" },
          ]}
        />
        <br />
      </div>
    );
  }
}
