import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Bread from "./Hobby/Bread";
import Cooking from "./Hobby/Cooking";
import DigitalArt from "./Hobby/DigitalArt";
import Garden from "./Hobby/Garden";
import Sunset from "./Hobby/Sunset";
import Home from "./Home";
import Animator from "./Projects/Animator";
import FishColy from "./Projects/fishcoly";
import FishRem from "./Projects/fishrem";
import PersWeb from "./Projects/persweb";
import Robot from "./Projects/robot";
import Virus from "./Projects/Virus";
import ScrollToTop from "./ScrollTop";

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <div>
          <Route path="/" exact={true} component={Home} />
          <Route path="/hobbies/cooking" exact={true} component={Cooking} />
          <Route path="/hobbies/bread" exact={true} component={Bread} />
          <Route path="/hobbies/garden" exact={true} component={Garden} />
          <Route path="/hobbies/sunset" exact={true} component={Sunset} />
          <Route
            path="/hobbies/digitalart"
            exact={true}
            component={DigitalArt}
          />
          <Route path="/projects/fishcoly" exact={true} component={FishColy} />
          <Route path="/projects/fishrem" exact={true} component={FishRem} />
          <Route path="/projects/antivirus" exact={true} component={Virus} />
          <Route
            path="/projects/personalweb"
            exact={true}
            component={PersWeb}
          />
          <Route path="/projects/robot" exact={true} component={Robot} />
          <Route path="/projects/animator" exact={true} component={Animator} />
        </div>
      </BrowserRouter>
    );
  }
}
