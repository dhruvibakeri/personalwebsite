import React from "react";
import Introduction from "./Introduction";
import Projects from "./Projects";
import Recipes from "./Recipes";
import Sunsets from "./Sunsets";

export default class Home extends React.Component {
  render() {
    return (
      <div>
        Home
        <div>
          <Introduction />
        </div>
        <div>
          <Projects />
        </div>
        <div>
          <Recipes />
        </div>
        <div>
          <Sunsets />
        </div>
      </div>
    );
  }
}
