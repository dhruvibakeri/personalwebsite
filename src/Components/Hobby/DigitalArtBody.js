import React from "react";
import { Link } from "react-router-dom";
import friends from "../../images/art/friends2.jpg";
import intro from "../../images/art/intro.jpg";

export default class DigitalArtBody extends React.Component {
  listOfItems = [
    { id: 0, pic: friends, heading: "" },
    { id: 1, pic: intro, heading: "" },
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
              <h3 className="change-font-2">DIGITAL ART</h3>
              <br />

              {this.listOfItems.map((item) => {
                return (
                  <div key={item.id}>
                    <img className="friends-img" src={item.pic} alt=""></img>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
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
