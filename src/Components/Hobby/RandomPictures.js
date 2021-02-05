import React from "react";

export default class RandomPicures extends React.Component {
  render() {
    return (
      <div>
        <br />
        <h1 className="change-font-3">{this.props.heading}</h1>
        <br />
        <div className="card-columns">
          {this.props.listOfPics.map((pic) => {
            return (
              <div key={pic.id}>
                <div className="polaroid">
                  <div className="card">
                    <div className="card-body">
                      <img className="pol-photo" src={pic.photo} alt="" />
                      <br />
                      <div className=" change-font-3 text-large">
                        {pic.label1}
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
