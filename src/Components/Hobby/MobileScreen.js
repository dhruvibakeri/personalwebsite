import React from "react";

export default class MobileScreen extends React.Component {
  render() {
    return (
      <div>
        <h1 className="change-font-3">{this.props.heading}</h1>
        <br />
        {this.props.listOfPics.map((pic) => {
          return (
            <div>
              <div className="polaroid-mobile">
                <div className="card">
                  <div className="card-body">
                    <img className="pol-photo-mobile" src={pic.photo} alt="" />
                    <br />
                    <p className=" change-font-3 text-large">
                      {pic.recipe ? (
                        <div>
                          <a classname="text-pad" href={pic.recipe}>
                            {"\n"}Recipe
                          </a>
                        </div>
                      ) : (
                        pic.label1
                      )}
                    </p>
                  </div>
                </div>
              </div>
              <div className="change-font-3 text-center text-xlarge text-pad">
                {pic.descp1}
              </div>
            </div>
          );
        })}

        <br />
      </div>
    );
  }
}
