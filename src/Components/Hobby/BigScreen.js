import React from "react";

export default class BigScreen extends React.Component {
  state = {
    listOfPics: this.props.listOfPics,
  };

  render() {
    return (
      <div>
        <br />
        <h1 className="change-font-3">{this.props.heading}</h1>
        <br />
        <br />
        <div className="pad-polaroid">
          {this.props.listOfPics.map((pic) => {
            return (
              <div key={pic.id}>
                {pic.id % 2 === 0 ? (
                  <div className="same-line-elements">
                    <div className="polaroid-left">
                      <div className="card">
                        <div className="card-body">
                          <img className="pol-photo" src={pic.photo} alt="" />
                          <br />
                          <div className=" change-font-3 text-large">
                            {pic.recipe ? (
                              <div>
                                <a classname="text-pad" href={pic.recipe}>
                                  {"\n"}Recipe
                                </a>
                              </div>
                            ) : (
                              pic.label1
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="change-font-3 text-center text-xlarge text-pad">
                      <br />
                      {pic.descp1}
                    </div>
                  </div>
                ) : (
                  <div className="same-line-elements">
                    <div className="change-font-3 text-center text-xlarge text-pad">
                      <br />
                      {pic.descp1}
                    </div>
                    <div className="polaroid-right">
                      <div className="card">
                        <div className="card-body">
                          <img className="pol-photo" src={pic.photo} alt="" />
                          <br />
                          <div className=" change-font-3 text-large">
                            {pic.recipe ? (
                              <div>
                                <a classname="text-pad" href={pic.recipe}>
                                  {"\n"}Recipe
                                </a>
                              </div>
                            ) : (
                              pic.label1
                            )}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
        <br />
      </div>
    );
  }
}
