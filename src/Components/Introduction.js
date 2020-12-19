import React from "react";
import MenuItems from "./MenuItems";

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
            <div className="col-sm-5">pic from mounica</div>
            <div className="col-sm-5">
              <h2 className="text-left change-font font-weight-bold">
                Hi, I'm Dhruvi!
              </h2>
              <p className="text-left text-large">
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
