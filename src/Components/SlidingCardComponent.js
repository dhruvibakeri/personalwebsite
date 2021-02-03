import React from "react";
import { Link } from "react-router-dom";

export default class SlidingCardComponent extends React.Component {
  state = {
    listOfCard: this.props.listOfCards,
  };

  slideCardsRight = () => {
    this.setState({
      listOfCard: [...this.state.listOfCard.slice(1), this.state.listOfCard[0]],
    });
  };

  slideCardsLeft = () => {
    this.setState({
      listOfCard: [
        this.state.listOfCard[this.state.listOfCard.length - 1],
        ...this.state.listOfCard.slice(0, this.state.listOfCard.length - 1),
      ],
    });
  };

  width =
    window.innerWidth ||
    document.documentElement.clientWidth ||
    document.body.clientWidth;

  render() {
    return (
      <div>
        <div className="same-line-elements">
          <div className="slide-style-prev">
            <button className="btn" onClick={this.slideCardsLeft}>
              <i
                className="fa fa-angle-double-left fa-2x change-font-col"
                aria-hidden="true"
              ></i>
            </button>
          </div>
          {this.state.listOfCard
            .slice(0, this.width > 1300 ? 5 : 4)
            .map((card) => {
              return (
                <div>
                  <div key={card.id}>
                    <Link to={card.link}>
                      <div id="cardhover">
                        <div className="card style-card">
                          <img
                            className="card-img-top imghover"
                            src={card.image}
                            alt=""
                          />
                          <div className="middle">
                            {this.props.giveImg === "true" ? (
                              <div>
                                <img src={card.logo} alt="" />
                              </div>
                            ) : (
                              <div className="text change-font-2">
                                {card.label}
                              </div>
                            )}
                          </div>
                        </div>
                      </div>
                    </Link>
                  </div>
                </div>
              );
            })}
          <div className="slide-style-next">
            <button className="btn" onClick={this.slideCardsRight}>
              <i
                className="fa fa-angle-double-right fa-2x change-font-col"
                aria-hidden="true"
              ></i>
            </button>
          </div>
        </div>
      </div>
    );
  }
}
