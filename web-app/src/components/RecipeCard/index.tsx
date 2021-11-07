import React from "react";
import "./styles.css";

import { FaUser } from "react-icons/fa";
import { FiClock } from "react-icons/fi";

import ApplePie from "../../assets/images/apple-pie.jpg";

const RecipeCard = () => {
  return (
    <div className="recipes-wrapper">
      <div className="recipe-card-wrapper">
        <div className="container">
          <img src={ApplePie} alt="recipe" />
          <div className="recipe-info-box">
            <div className="recipe-info">
              <FaUser size="18" />
              <p>5</p>
            </div>
            <div className="recipe-info">
              <FiClock size="18" />
              <p>45min.</p>
            </div>
          </div>
        </div>

        <p>Recipe card</p>
      </div>

      <div className="recipe-card-wrapper">
        <div className="container">
          <img src={ApplePie} alt="recipe" />
          <div className="recipe-info-box">
            <div className="recipe-info">
              <FaUser size="18" />
              <p>5</p>
            </div>
            <div className="recipe-info">
              <FiClock size="18" />
              <p>45min.</p>
            </div>
          </div>
        </div>

        <p>Recipe card</p>
      </div>

      <div className="recipe-card-wrapper">
        <div className="container">
          <img src={ApplePie} alt="recipe" />
          <div className="recipe-info-box">
            <div className="recipe-info">
              <FaUser size="18" />
              <p>5</p>
            </div>
            <div className="recipe-info">
              <FiClock size="18" />
              <p>45min.</p>
            </div>
          </div>
        </div>

        <p>Recipe card</p>
      </div>
    </div>
  );
};

export default RecipeCard;
