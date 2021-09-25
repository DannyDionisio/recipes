import React from "react";

import "./styles.css";

import Navbar from "../Navbar";

type PageContainerProps = { children: React.ReactNode };

const PageContainer: React.FC<PageContainerProps> = ({ children }) => {
  return (
    <div className="page-container">
      <Navbar />

      <div className="page-content">{children}</div>
    </div>
  );
};

export default PageContainer;
