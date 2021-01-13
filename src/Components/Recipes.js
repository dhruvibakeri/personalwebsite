import React from "react";
import CardComponent from "./CardComponent";
import MenuItems from "./MenuItems";
import bagel from "../images/bagel.JPG";
import pestoswirl from "../images/pestoswirl.jpg";
import buns from "../images/buns.jpg";
import foccrumb from "../images/focacciacrumb.jpg";
import naan from "../images/naan.jpg";
import bao from "../images/bao.jpg";
import noodles from "../images/noodles.jpg";
import podidosa from "../images/podidosa.jpg";

export default class Recipes extends React.Component {
  noMenuJSX = "";

  render() {
    return (
      <div className="child">
        <div className="same-line-elements">
          <h1 className="change-font-2 heading-place">RECIPES</h1>
          <MenuItems noMenu={this.noMenuJSX} defaultView={false} />
        </div>
        <CardComponent
          listOfCards={[
            {
              image: bagel,
              id: 0,
              label: "Whole wheat bagels",
              link: "/recipes/bagel",
            },
            {
              image: pestoswirl,
              id: 1,
              label: "Pesto Swirl loaf",
              link: "/recipes/pestoswirlloaf",
            },
            {
              image: buns,
              id: 2,
              label: "Burger buns",
              link: "/recipes/burgerbuns",
            },
            {
              image: foccrumb,
              id: 3,
              label: "Garlic and Rosemary focaccia",
              link: "/recipes/focaccia",
            },
            {
              image: naan,
              id: 4,
              label: " Hariyali Naan",
              link: "/recipes/naan",
            },
            { image: bao, id: 5, label: "Bao buns", link: "/recipes/baobuns" },
            {
              image: noodles,
              id: 6,
              label: "Honey chilli noodles",
              link: "/recipes/honeychillinoodles",
            },
            {
              image: podidosa,
              id: 7,
              label: "Ghee Podi Dosa",
              link: "/recipes/podidosa",
            },
          ]}
        />
        <br />
      </div>
    );
  }
}
