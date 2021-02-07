import React from "react";
import { Link } from "react-router-dom";
import b1 from "../../images/breads/b1.png";
import b2 from "../../images/breads/b2.jpg";
import b3 from "../../images/breads/b3.jpg";
import b5 from "../../images/breads/b5.JPG";
import b6 from "../../images/breads/b6.JPG";
import b7 from "../../images/breads/b7.JPG";
import b8 from "../../images/breads/b8.JPG";
import b9 from "../../images/breads/b9.JPG";
import bagel from "../../images/breads/bagel.JPG";

import RandomPicures from "./RandomPictures";

export default class BreadBody extends React.Component {
  breads = [
    {
      id: 0,
      photo: b1,
      label1: "",
    },
    {
      id: 1,
      photo: b2,
      label1: "pesto swirl bread",
    },
    {
      id: 2,
      photo: b3,
      label1: "",
    },
    {
      id: 4,
      photo: b5,
      label1: "burger buns",
    },
    {
      id: 5,
      photo: b6,
      label1: "",
    },
    {
      id: 6,
      photo: b7,
      label1: "challah bread",
    },
    {
      id: 7,
      photo: b8,
      label1: "",
    },
    {
      id: 8,
      photo: b9,
      label1: "ciabatta",
    },
    {
      id: 9,
      photo: bagel,
      label1: "whole wheat bagel",
    },
  ];

  listOfItems = [{ id: 0, list: this.breads, heading: "" }];

  render() {
    return (
      <div>
        <div className="fill-window">
          <div className="parent">
            <div className="child">
              <div className="row" id="homebutton">
                <Link to="/">
                  <button className="btn btn-secondary  home-button">
                    Home
                  </button>
                </Link>
              </div>
              <h3 className="change-font-2">BAKING BREAD</h3>

              {this.listOfItems.map((item) => {
                return (
                  <div key={item.id}>
                    <RandomPicures
                      listOfPics={item.list}
                      heading={item.heading}
                    />
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
