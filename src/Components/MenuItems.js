import React from "react";

export default class MenuItems extends React.Component {
  state = {
    viewMenu: this.props.defaultView,
  };

  toggleMenu = () => {
    this.setState({
      viewMenu: !this.state.viewMenu,
    });
  };

  render() {
    return (
      <div>
        <button
          onClick={this.toggleMenu}
          className="btn btn-outline-secondary btn-sm float-right btn-left"
        >
          {this.state.viewMenu ? "Hide Menu" : "View Menu"}
        </button>
        <br />
        <br />
        {this.state.viewMenu ? (
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
            <button className="btn  btn-lg float-right">
              <span className="lead">Resume</span>
            </button>
            <br />
            <br />
            <a href="#recipe">
              <button className="btn btn-lg float-right">
                <span className="lead">Recipes</span>
              </button>
            </a>
          </div>
        ) : (
          this.props.noMenu
        )}
      </div>
    );
  }
}
