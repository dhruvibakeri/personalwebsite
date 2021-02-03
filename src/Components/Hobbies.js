import React from "react";
import MenuItems from "./MenuItems";
import bagel from "../images/bagel.JPG";
import pestoswirl from "../images/pestoswirl.jpg";
import buns from "../images/buns.jpg";
import foccrumb from "../images/focacciacrumb.jpg";
import bao from "../images/bao.jpg";
import noodles from "../images/noodles.jpg";
import friends from "../images/friends.jpg";
import me from "../images/me.jpg";
import sangria from "../images/sangria.JPG";
import dal from "../images/dal.JPG";
import falafel from "../images/falafel.JPG";
import CardSlider from "./CardSlider";

const listOfCooking = [
  {
    image: noodles,
    id: 0,
    label: "Honey chilli noodles",
    link: "/recipes/honeychillinoodles",
  },
  {
    image: sangria,
    id: 1,
    label: "sangria",
    link: "/recipes/podidosa",
  },
  {
    image: dal,
    id: 2,
    label: "Dal Makhani",
    link: "/recipes/podidosa",
  },
  {
    image: falafel,
    id: 3,
    label: "Falafel",
    link: "/recipes/podidosa",
  },
];

const listArt = [
  {
    image: friends,
    id: 0,
    label: "",
    link: "/digitalart/friends",
  },
  {
    image: me,
    id: 1,
    label: "",
    link: "/recipes/honeychillinoodles",
  },
];

const listOfBreads = [
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
    image: bao,
    id: 4,
    label: "Bao buns",
    link: "/recipes/baobuns",
  },
];

export default class Hobbies extends React.Component {
  noMenuJSX = "";

  render() {
    return (
      <div className="child">
        <div className="same-line-elements">
          <h1 className="change-font-2 heading-place">HOBBIES</h1>
          <MenuItems noMenu={this.noMenuJSX} defaultView={false} />
        </div>
        <h3 className="change-font-2">COOKING</h3>
        <CardSlider listOfCards={listOfCooking} />
        <h3 className="change-font-2">BREADS</h3>
        <CardSlider listOfCards={listOfBreads} />
        <h3 className="change-font-2">DIGITAL ART</h3>
        <CardSlider listOfCards={listArt} />
        <br />
      </div>
    );
  }
}
