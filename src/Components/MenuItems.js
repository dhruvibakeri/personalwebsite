import React from "react";
import resume from "../Documents/Dhruvi_Resume.pdf";

export default class MenuItems extends React.Component {
  state = {
    viewMenu: this.props.defaultView,
  };

  toggleMenu = () => {
    this.setState({
      viewMenu: !this.state.viewMenu,
    });
  };

  menuIntroJSX = (
    <div className="menu-items" id="nav">
      <a href="#intro">
        <button className="btn btn-lg float-right">
          {" "}
          <span className="lead">Intro</span>
        </button>
      </a>
      <br />
      <br />
      <a href="#project">
        <button className="btn btn-lg float-right">
          <span className="lead">Projects</span>
        </button>
      </a>
      <br />
      <br />
      <a href={resume} target="_blank" rel="noreferrer">
        <button className="btn  btn-lg float-right">
          <span className="lead">Resume</span>
        </button>
      </a>
      <br />
      <br />
      <a href="#recipe">
        <button className="btn btn-lg float-right">
          <span className="lead">Recipes</span>
        </button>
      </a>
    </div>
  );

  menuOtherJSX = (
    <div className="menu-items same-line-elements" id="nav">
      <a href="#intro">
        <button className="btn btn-lg float-right">
          {" "}
          <span className="lead ">Intro</span>
        </button>
      </a>
      <a href="#project">
        <button className="btn btn-lg float-right">
          <span className="lead">Projects</span>
        </button>
      </a>
      <a href={resume} target="_blank" rel="noreferrer">
        <button className="btn  btn-lg float-right">
          <span className="lead">Resume</span>
        </button>
      </a>
      <a href="#recipe">
        <button className="btn btn-lg float-right">
          <span className="lead">Recipes</span>
        </button>
      </a>
    </div>
  );

  render() {
    if (this.props.intro) {
      return this.menuIntroJSX;
    }
    return (
      <div className=" menu-items ">
        <button
          onClick={this.toggleMenu}
          className="btn btn-outline-secondary btn-sm float-right btn-left"
        >
          {this.state.viewMenu ? "Hide Menu" : "View Menu"}
        </button>
        <br />
        <br />
        {this.state.viewMenu ? this.menuOtherJSX : this.props.noMenu}
      </div>
    );
  }
}
