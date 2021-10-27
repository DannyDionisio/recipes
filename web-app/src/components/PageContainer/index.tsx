import React, { FC } from "react";

import "./styles.css";

import Navbar from "../Navbar";

const PageContainer: FC = ({ children }) => {
  return (
    <div className="page-container">
      <Navbar />

      <div className="page-content">{children}</div>
    </div>
  );
};

export default PageContainer;
