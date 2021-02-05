import React from "react";
import { Link } from "react-router-dom";
import noodles from "../../images/cooking/noodles.jpg";
import sauce from "../../images/cooking/sauce.JPG";
import sangria from "../../images/cooking/sangria.JPG";
import sangria1 from "../../images/cooking/sangria1.JPG";
import sangria2 from "../../images/cooking/sangria2.png";
import dal from "../../images/cooking/dal.JPG";
import paneer1 from "../../images/cooking/paneer1.png";
import paneer2 from "../../images/cooking/paneer2.jpg";
import naan from "../../images/cooking/naan.jpg";
import pt1 from "../../images/cooking/pt1.JPG";
import pt2 from "../../images/cooking/pt2.JPG";
import pt3 from "../../images/cooking/pt3.JPG";
import piz1 from "../../images/cooking/piz1.JPG";
import piz2 from "../../images/cooking/piz2.JPG";
import par1 from "../../images/cooking/par1.jpg";
import par2 from "../../images/cooking/par2.jpg";
import piz3 from "../../images/cooking/piz3.JPG";
import piz4 from "../../images/cooking/piz4.jpg";
import h1 from "../../images/cooking/h1.JPG";
import h2 from "../../images/cooking/h2.JPG";
import h3 from "../../images/cooking/h3.JPG";
import h4 from "../../images/cooking/h4.JPG";
import h5 from "../../images/cooking/h5.JPG";
import falafel from "../../images/cooking/falafel.JPG";
import RandomPicures from "./RandomPictures";

export default class CookingBody extends React.Component {
  listOfNoodles = [
    {
      id: 0,
      photo: sauce,
      label1: "the sauce",
      descp1:
        "Sauce : Soy sauce, vinegar, sesame oil, chilli flakes, sesame seeds,garlic, honey, green chilli and scallions.",
    },
    {
      id: 1,
      photo: noodles,
      label1: "",
      descp1: "Boil noodles and mix with sauce. Add peanuts as well.",
      recipe:
        "https://www.youtube.com/watch?v=xGByroqtggc&ab_channel=JaydelCorro",
    },
  ];

  listOfSangria = [
    {
      id: 2,
      photo: sangria,
      label1: "",
      descp1:
        "Red Wine, Gin, Strawberries, Orange, basil , soda, mint leaves, lemon",
    },
    {
      id: 3,
      photo: sangria1,
      label1: "",
    },
    {
      id: 4,
      photo: sangria2,
      label1: "",
    },
  ];

  listOfDal = [
    {
      id: 5,
      photo: dal,
      label1: "",
    },
    {
      id: 6,
      photo: paneer1,
      label1: "",
    },
    {
      id: 7,
      photo: paneer2,
      label1: "",
    },
    {
      id: 8,
      photo: naan,
      label1: "",
    },
  ];

  pitathyme = [
    {
      id: 9,
      photo: falafel,
      label1: "",
    },
    {
      id: 10,
      photo: pt1,
      label1: "",
    },
    {
      id: 11,
      photo: pt2,
      label1: "",
    },
    {
      id: 12,
      photo: pt3,
      label1: "",
    },
  ];

  hummus = [
    {
      id: 0,
      photo: h3,
      label1: "",
    },
    {
      id: 1,
      photo: h1,
      label1: "basil hummus",
    },
    {
      id: 2,
      photo: h2,
      label1: "olive hummus",
    },
    {
      id: 3,
      photo: h4,
      label1: "red pepper hummus",
    },
    {
      id: 4,
      photo: h5,
      label1: "original hummus",
    },
  ];

  pizza = [
    {
      id: 0,
      photo: piz1,
      label1: "",
    },
    {
      id: 1,
      photo: piz2,
      label1: "",
    },
    {
      id: 2,
      photo: piz3,
      label1: "",
    },
    {
      id: 3,
      photo: piz4,
      label1: "",
    },
  ];

  paratha = [
    {
      id: 0,
      photo: par1,
      label1: "garlic chutney",
    },
    {
      id: 1,
      photo: par2,
      label1: "",
    },
  ];

  listOfItems = [
    { id: 0, list: this.listOfNoodles, heading: "Honey Chilli Noodles" },
    {
      id: 1,
      list: this.pitathyme,
      heading: "Recreating Pita Thyme",
    },

    {
      id: 2,
      list: this.listOfDal,
      heading: "Dal Makhani, Paneer masala , Naan",
    },

    {
      id: 3,
      list: this.hummus,
      heading: "Hummus with Scallion Chips",
    },
    {
      id: 4,
      list: this.pizza,
      heading: "Pizza",
    },
    {
      id: 5,
      list: this.paratha,
      heading: "Gobi Paratha",
    },
    { id: 6, list: this.listOfSangria, heading: "Red Wine Sangria" },
  ];

  render() {
    return (
      <div>
        <div className="fill-window">
          <div className="parent">
            <div className="child">
              <div className="row" id="homebutton">
                <Link to="/">
                  <button className="btn btn-lg button-right">
                    <span className="lead">Home</span>
                  </button>
                </Link>
              </div>
              <h3 className="change-font-2">COOKING</h3>

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
