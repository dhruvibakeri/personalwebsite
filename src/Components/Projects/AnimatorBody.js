import React from "react";
import { Link } from "react-router-dom";
import animatortext from "../../images/animatortext.png";
import animatorvid from "../../images/animatorvid.mov";

export default class AnimatorBody extends React.Component {
  render() {
    return (
      <div className="child">
        <br />
        <div className="row" id="homebutton">
          <Link to="/">
            <button className="btn btn-lg button-right">
              <span className="lead">Home</span>
            </button>
          </Link>
        </div>
        <h3 className="change-font-2">ANIMATOR</h3>
        <br />
        <div className="row">
          <div className="col-sm-3">
            <a
              href="https://github.com/dhruvibakeri/antivirus"
              target="_blank"
              rel="noreferrer"
            >
              <button className="btn btn-dark">Github Repo</button>
            </a>
          </div>
        </div>
        <div className="change-font-2 text-center text-medium text-pad">
          <br />
          <br />
          This is an application that creates simple 2D animations from shapes.
          It draws an animation according to how it is described in text. For
          example, for such an input :
          <br />
          <br />
          <br />
          <img width="60%" height="auto" src={animatortext} alt=""></img>
          <br />
          <br />
          <br />
          Would produce an animation like this :
          <br />
          <br />
          <video width="40%" height="auto" controls>
            <source src={animatorvid} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
          <br />
          <br />
          Main language used was Java. I used Java Swing Library for the
          graphics.
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
          <br />
        </div>
      </div>
    );
  }
}
