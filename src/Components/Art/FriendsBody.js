import React from "react";
import { Link } from "react-router-dom";
import friends from "../../images/friends2.jpg";

export default class FriendsBody extends React.Component {
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
        <img className="friends-img" src={friends} alt=""></img>
        <br />
        <br />
        <br />
        <br />
      </div>
    );
  }
}
