import React from "react";
import { Link } from "react-router-dom";

export default class CardComponent extends React.Component {
  state = {
    listOfCard: this.props.listOfCards,
  };

  render() {
    return (
      <div>
        <div className="row row-padding">
          {this.state.listOfCard.map((card) => {
            return (
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
                          <div className="text change-font font-weight-bold">
                            {card.label}
                          </div>
                        )}
                      </div>
                    </div>
                    <div className=" style-card change-font-4 text-shrink font-weight-bold">
                      {card.text}
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}
