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
                  I'm a Computer Science major at Northeastern University. I'm
                  currently a senior and will graduate in May'21. My main
                  interests include software development and cybersecurity.
                  In my free time I enjoy cooking, baking bread, and painting!
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
