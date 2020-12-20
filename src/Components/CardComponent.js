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
                <div className="">
                  <div id="cardhover">
                    <div className="card style-card">
                      <img
                        className="card-img-top imghover"
                        src={card.image}
                        alt=""
                      />
                      <div className="middle">
                        <div className="text change-font font-weight-bold">
                          {card.label}
                        </div>
                      </div>
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
