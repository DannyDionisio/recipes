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

      <Navbar title="Recipes" />
      <Navbar title="New Recipe" />
      <Navbar title="Meal Planner" />
      <Navbar title="Shopping List" />
    </div>
  );
};

export default Navbar;
