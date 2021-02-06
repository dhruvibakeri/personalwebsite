import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Bread from "./Hobby/Bread";
import Cooking from "./Hobby/Cooking";
import DigitalArt from "./Hobby/DigitalArt";
import Garden from "./Hobby/Garden";
import Home from "./Home";
import FishColy from "./Projects/fishcoly";
import FishRem from "./Projects/fishrem";
import PersWeb from "./Projects/persweb";
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
          <Route
            path="/hobbies/digitalart"
            exact={true}
            component={DigitalArt}
          />
          <Route path="/projects/fishcoly" exact={true} component={FishColy} />
          <Route path="/projects/fishrem" exact={true} component={FishRem} />
          <Route
            path="/projects/personalweb"
            exact={true}
            component={PersWeb}
          />
        </div>
      </BrowserRouter>
    );
  }
}
