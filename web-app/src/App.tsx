import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import CreateRecipe from "./pages/CreateRecipe";
import Login from "./pages/Login";
import RecipesList from "./pages/RecipesList";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/signup" component={Signup} />
        <Route path="/recipe/create" component={CreateRecipe} />
        <Route path="/recipes" component={RecipesList} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;
