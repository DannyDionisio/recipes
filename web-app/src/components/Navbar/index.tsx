import React from "react";

import "./styles.css";

import ProfilePhoto from "../../assets/images/profile-photo.png";
import Menu from "../Menu";

const Navbar = () => {
  return (
    <div className="navbar-container">
      <section>
        <h1>Yummy.io</h1>
        <div className="line" />
      </section>

      <section>
        <a href="/">
          <img src={ProfilePhoto} alt="Profile" />
        </a>
      </section>

      <Menu>Recipes</Menu>
      <Menu>New Recipe</Menu>
      <Menu>Meal Planner</Menu>
      <Menu>Shopping List</Menu>
    </div>
  );
};

export default Navbar;
