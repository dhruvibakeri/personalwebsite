import React from "react";
import { Link } from "react-router-dom";
import sf1 from "../../images/sunsets/sf1.jpg";
import sf2 from "../../images/sunsets/sf2.jpg";
import sf3 from "../../images/sunsets/sf3.JPG";
import home1 from "../../images/sunsets/home1.png";
import home2 from "../../images/sunsets/home2.png";
import home3 from "../../images/sunsets/home3.png";
import ri1 from "../../images/sunsets/ri1.png";
import bos1 from "../../images/sunsets/bos1.JPG";
import bos2 from "../../images/sunsets/bos2.JPG";
import bos3 from "../../images/sunsets/bos3.JPG";
import RandomPicures from "./RandomPictures";

export default class SunsetBody extends React.Component {
  listOfPics = [
    {
      id: 0,
      photo: sf1,
      label1: "San Francisco",
    },
    {
      id: 1,
      photo: sf2,
      label1: "San Francisco",
    },
    {
      id: 2,
      photo: sf3,
      label1: "San Francisco",
    },
    {
      id: 3,
      photo: home1,
      label1: "Ahmedabad, India",
    },
    {
      id: 4,
      photo: home2,
      label1: "Ahmedabad, India",
    },
    {
      id: 5,
      photo: home3,
      label1: "Ahmedabad, India",
    },
    {
      id: 6,
      photo: bos1,
      label1: "Boston",
    },
    {
      id: 7,
      photo: bos2,
      label1: "Boston",
    },
    {
      id: 8,
      photo: bos3,
      label1: "Boston",
    },
    {
      id: 9,
      photo: ri1,
      label1: "Rhode Island",
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
                  <button className="btn btn-secondary  home-button">
                    Home
                  </button>
                </Link>
              </div>
              <h3 className="change-font-3 text-pad">
                This is not a hobby, but I love watching sunsets and these are a
                few of my favourite ones :)
              </h3>
              <RandomPicures listOfPics={this.listOfPics} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
