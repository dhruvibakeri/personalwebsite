import React from "react";

export default class CardComponent extends React.Component {
  state = {
    listOfCard: this.props.listOfCards,
  };

  render() {
    let rowOrient =
      this.props.rowOrientation === "right"
        ? "row row-padding-right"
        : "row row-padding-left";
    return (
      <div>
        <div className={rowOrient}>
          {this.state.listOfCard.map((card) => {
            return (
              <div key={card.id}>
                <div className="col-sm-2.5">
                  <div id="cardhover">
                    <div className="card style-card">
                      <img className="card-img-top" src={card.image} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
