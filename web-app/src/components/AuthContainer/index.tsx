import React from "react";

import "./styles.css";

import RecipeBook from "../../assets/images/recipe-book.png";

import BoxContainer from "../BoxContainer";

type AuthContainerProps = {
  onSubmit: React.FormEventHandler<HTMLFormElement>;
  children: React.ReactNode;
};

const AuthContainer: React.FC<AuthContainerProps> = ({
  onSubmit,
  children,
}) => {
  return (
    <div className="auth-container">
      <div className="auth-form">
        <div className="auth-form__title">
          <img src={RecipeBook} alt="Logo" />
          <h1>Yummy.io</h1>
        </div>
        <BoxContainer>
          <form onSubmit={onSubmit}>{children}</form>
        </BoxContainer>
      </div>
    </div>
  );
};

export default AuthContainer;
