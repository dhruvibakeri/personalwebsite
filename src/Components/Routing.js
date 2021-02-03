import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Friends from "./Art/friends";
import Home from "./Home";
import FishColy from "./Projects/fishcoly";
import FishRem from "./Projects/fishrem";
import PersWeb from "./Projects/persweb";
import BagelRecipe from "./Recipes/BagelRecipe";
import BaoRecipe from "./Recipes/BaoRecipe";
import Burger from "./Recipes/Burger";
import DosaRecipe from "./Recipes/DosaRecipe";
import Focaccia from "./Recipes/Focaccia";
import NaanRecipe from "./Recipes/NaanRecipe";
import NoodleRecipe from "./Recipes/NoodleRecipe";
import PestoSwirl from "./Recipes/PestoSwirl";
import ScrollToTop from "./ScrollTop";

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <ScrollToTop />
        <div>
          <Route path="/" exact={true} component={Home} />
          <Route path="/recipes/bagel" exact={true} component={BagelRecipe} />
          <Route
            path="/recipes/pestoswirlloaf"
            exact={true}
            component={PestoSwirl}
          />
          <Route path="/recipes/burgerbuns" exact={true} component={Burger} />
          <Route path="/recipes/focaccia" exact={true} component={Focaccia} />
          <Route path="/recipes/naan" exact={true} component={NaanRecipe} />
          <Route path="/recipes/baobuns" exact={true} component={BaoRecipe} />
          <Route
            path="/recipes/honeychillinoodles"
            exact={true}
            component={NoodleRecipe}
          />
          <Route path="/recipes/podidosa" exact={true} component={DosaRecipe} />
          <Route path="/projects/fishcoly" exact={true} component={FishColy} />
          <Route path="/projects/fishrem" exact={true} component={FishRem} />
          <Route path="/digitalart/friends" exact={true} component={Friends} />
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
