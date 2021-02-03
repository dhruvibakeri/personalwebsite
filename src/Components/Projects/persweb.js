import React from "react";
import PersWebBody from "./PersWebBody";

export default class PersWeb extends React.Component {
  render() {
    return (
      <div className="fill-window" id="intro">
        <div className="parent">
          <PersWebBody />
        </div>
      </div>
    );
  }
}
