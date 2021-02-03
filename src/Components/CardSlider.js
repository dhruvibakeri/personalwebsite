import React from "react";
import SlidingCardComponent from "./SlidingCardComponent";
import CardComponent from "./CardComponent";

export default class CardSlider extends React.Component {
  render() {
    return (
      <div>
        <div className="big-screen">
          <SlidingCardComponent listOfCards={this.props.listOfCards} />
        </div>
        <div className="small-screen">
          <CardComponent listOfCards={this.props.listOfCards} />
        </div>
      </div>
    );
  }
}
