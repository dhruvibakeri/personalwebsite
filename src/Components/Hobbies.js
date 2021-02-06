import React from "react";
import MenuItems from "./MenuItems";
import cooking from "../images/cooking.png";
import digitalart from "../images/digitalart.png";
import bread from "../images/bread.png";
import CardSlider from "./CardSlider";
import gardening from "../images/gardening.png";
import ftime from "../images/focacciatime.png";

const listOfHobbies = [
  {
    image: cooking,
    id: 0,
    label: "cooking",
    link: "/hobbies/cooking",
  },
  {
    image: bread,
    id: 1,
    label: "baking bread",
    link: "/hobbies/bread",
  },
  {
    image: digitalart,
    id: 2,
    label: "digital art",
    link: "/hobbies/digitalart",
  },
  {
    image: gardening,
    id: 3,
    label: "first attempt at gardening",
    link: "/hobbies/garden",
  },
  {
    image: ftime,
    id: 4,
    label: "focaccia",
    link: "/recipes/podidosa",
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
        <CardSlider listOfCards={listOfHobbies} />
        <br />
      </div>
    );
  }
}
