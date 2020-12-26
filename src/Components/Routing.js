import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Route } from "react-router-dom";
import Home from "./Home";
import BagelRecipe from "./Recipes/BagelRecipe";
import BaoRecipe from "./Recipes/BaoRecipe";
import Burger from "./Recipes/Burger";
import DosaRecipe from "./Recipes/DosaRecipe";
import Focaccia from "./Recipes/Focaccia";
import NaanRecipe from "./Recipes/NaanRecipe";
import NoodleRecipe from "./Recipes/NoodleRecipe";
import PestoSwirl from "./Recipes/PestoSwirl";

export default class Routing extends React.Component {
  render() {
    return (
      <BrowserRouter>
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
        </div>
      </BrowserRouter>
    );
  }
}
