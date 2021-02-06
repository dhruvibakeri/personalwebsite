import React from "react";
import { Link } from "react-router-dom";
import g1 from "../../images/garden/g1.jpg";
import g2 from "../../images/garden/g2.jpg";
import g3 from "../../images/garden/g3.jpg";
import g4 from "../../images/garden/g4.jpg";
import g5 from "../../images/garden/g5.jpg";
import g6 from "../../images/garden/g6.png";
import g7 from "../../images/garden/g7.jpg";
import RandomPicures from "./RandomPictures";

export default class GardenBody extends React.Component {
  listOfPics = [
    {
      id: 0,
      photo: g1,
      label1: "August 2020",
    },
    {
      id: 1,
      photo: g2,
      label1: "",
    },
    {
      id: 2,
      photo: g3,
      label1: "",
    },
    {
      id: 3,
      photo: g4,
      label1: "September, 2020",
    },
    {
      id: 4,
      photo: g5,
      label1: "November, 2020",
    },
    {
      id: 5,
      photo: g6,
      label1: "December, 2020",
    },
    {
      id: 6,
      photo: g7,
      label1: "January, 2021",
    },
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
              <h3 className="change-font-2">
                FIRST ATTEMPT AT GARDENING - Growing Green Chillies
              </h3>
              <RandomPicures listOfPics={this.listOfPics} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
