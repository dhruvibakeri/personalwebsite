import React from "react";
import MenuItems from "./MenuItems";
import intro from "../images/intro.jpg";

export default class Introduction extends React.Component {
  noMenuJSX = (
    <div>
      <br />
      <br />
    </div>
  );

  render() {
    return (
      <div>
        <div className="child">
          <div className="row"></div>
          <MenuItems noMenu={this.noMenuJSX} defaultView={false} intro={true} />
          <div className="row">
            <div className="col-md-1"></div>
            <div className="col-md-5">
              <img className="intro-pic" src={intro} alt="" />
            </div>
            <div className="col-md-5">
              <br />
              <br />
              <h2 className="text-left change-font font-weight-bold intro-heading">
                Hi, I'm Dhruvi!
              </h2>
              <p className="text-left text-large intro-body">
                <span className="change-font">
                  I'm currently a senior at Northeastern University and am
                  majoring in Computer Science. My main interests include
                  full-stack web development and cybersecurity. In my free time
                  I like to cook and sometimes paint.
                </span>
              </p>
            </div>
          </div>
          <br />
          <br />

          <div id="project"></div>
        </div>
      </div>
    );
  }
}
