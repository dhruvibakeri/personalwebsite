import React from "react";
import MenuItems from "./MenuItems";
import CardComponent from "./CardComponent";
import fishcoly from "../images/fish-coly1.png";
import fishremote from "../images/fish-remote1.png";
import travelweb from "../images/travelweb1.png";
import personalweb from "../images/personalweb1.png";
import animator from "../images/animator1.png";
import virus from "../images/virus1.png";
import robot from "../images/robot1.png";
import fishColyLogo from "../images/fish-coly-logo.png";
import fishRemoteLogo from "../images/fish-remote-logo.png";
import travelLogo from "../images/travel-logo.png";
import personalLogo from "../images/personal-logo.png";
import virusLogo from "../images/virus-logo.png";
import animatorLogo from "../images/animator-logo.png";
import robotLogo from "../images/robot-logo.png";

export default class Projects extends React.Component {
  noMenuJSX = "";
  render() {
    return (
      <div className="child">
        <div className="same-line-elements">
          <h1 className="change-font-2 heading-place">PROJECTS</h1>
          <MenuItems noMenu={this.noMenuJSX} defaultView={false} />
        </div>
        <CardComponent
          rowOrientation="right"
          listOfCards={[
            {
              image: fishcoly,
              id: 0,
              logo: fishColyLogo,
              link: "/projects/fishcoly",
            },
            {
              image: fishremote,
              id: 1,
              logo: fishRemoteLogo,
              link: "/projects/fishrem",
            },
            { image: travelweb, id: 2, logo: travelLogo },
            {
              image: personalweb,
              id: 3,
              logo: personalLogo,
              link: "/projects/personalweb",
            },
            { image: animator, id: 4, logo: animatorLogo },
            { image: virus, id: 5, logo: virusLogo },
            { image: robot, id: 6, logo: robotLogo },
          ]}
          giveImg="true"
        />
        <br />
      </div>
    );
  }
}
