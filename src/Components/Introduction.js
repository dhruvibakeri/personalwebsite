import React from "react";
import MenuItems from "./MenuItems";
/*import intropic from "../images/intropic.jpg";*/
import intropiceye from "../images/intropic.jpg";

export default class Introduction extends React.Component {
  noMenuJSX = (
    <div>
      <br />
      <br />
      <br />
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
              <img className="intro-pic" src={intropiceye} alt="" />
            </div>
            <div className="col-md-5">
              <h2 className="text-left change-font font-weight-bold intro-heading">
                Hi, I'm Dhruvi!
              </h2>
              <p className="text-left text-large intro-body">
                <span className="change-font">
                  I'm currently a senior at Northeastern University and am
                  majoring in Computer Science. My main interests include
                  full-stack web development and cybersecurity. In my free time
                  I like to bake bread and sometimes paint.
                </span>
              </p>
            </div>
          </div>
          <br />
          <br />
          <br />
          <br />
          <div id="project"></div>
        </div>
      </div>
    );
  }
}
