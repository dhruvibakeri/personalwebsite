import React from "react";
import FriendsBody from "./FriendsBody";

export default class Friends extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <FriendsBody />
        </div>
      </div>
    );
  }
}
