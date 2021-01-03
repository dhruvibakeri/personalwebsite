import React from "react";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Recipes from "./Recipes";
import spic from "../images/orange-flower.png";
import Contact from "./Contact";

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
          <Recipes />
        </div>
        <div className="parent">
          <Contact />
        </div>
      </div>
    );
  }
}
