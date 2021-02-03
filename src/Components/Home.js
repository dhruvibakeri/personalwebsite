import React from "react";
import Introduction from "./Introduction";
import Projects from "./Projects";
import spic from "../images/small-flower.png";
import Contact from "./Contact";
import Hobbies from "./Hobbies";

export default class Home extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <Introduction />
          <img className="img-cover-left" src={spic} alt="" />
        </div>
        <div className="parent">
          <Projects />
          <div id="recipe"></div>
        </div>
        <div className="parent">
          <Hobbies />
        </div>
        <div className="parent">
          <Contact />
        </div>
      </div>
    );
  }
}
