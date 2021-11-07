import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import CreateRecipe from "./pages/CreateRecipe";
import Login from "./pages/Login";
import RecipesList from "./pages/RecipesList";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/recipe" exact component={RecipesList} />
      <Route path="/recipe/create" component={CreateRecipe} />
    </BrowserRouter>
  );
};

export default App;
