import React from "react";
import resume from "../Documents/Dhruvi_Resume.pdf";
import "bootstrap/js/src/collapse.js";

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
          <span className="lead">Hobbies</span>
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
          <span className="lead">Hobbies</span>
        </button>
      </a>
    </div>
  );

  mobileMenu = (
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <a class="navbar-brand" href="#intro">
        Menu
      </a>
      <button
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <div class="navbar-nav">
          <a class="nav-item nav-link" href="#intro">
            Intro <span class="sr-only">(current)</span>
          </a>
          <a class="nav-item nav-link" href="#project">
            Projects
          </a>
          <a
            class="nav-item nav-link"
            href={resume}
            target="_blank"
            rel="noreferrer"
          >
            Resume
          </a>
          <a class="nav-item nav-link" href="#recipe">
            Hobbies
          </a>
        </div>
      </div>
    </nav>
  );

  render() {
    if (this.props.intro) {
      return (
        <div>
          <div className="mobile-menu">{this.mobileMenu}</div>
          <div className="pad-menu">{this.menuOtherJSX}</div>
          <br />
          <br />
          <br />
          <br />
        </div>
      );
    }
    return (
      <div>
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
      </div>
    );
  }
}
