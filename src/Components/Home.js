import React from "react";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Recipes from "./Recipes";
import spic from "../images/small-flower.png";
import recipe from "../images/recipe.png";
import project from "../images/project.png";

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
          <img className="img-cover-right" src={project} alt="" />
          <div id="recipe"></div>
        </div>
        <div className="parent">
          <Recipes />
          <img className="img-cover-left-rec" src={recipe} alt="" />
        </div>
      </div>
    );
  }
}
