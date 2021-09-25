import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

import CreateRecipe from "./pages/CreateRecipe";
import Login from "./pages/Login";
import Signup from "./pages/Signup";

const App = () => {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/signup" component={Signup} />
      <Route path="/dashboard/create-recipe" component={CreateRecipe} />
    </BrowserRouter>
  );
};

export default App;
