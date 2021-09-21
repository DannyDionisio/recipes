import React from "react";

import "./styles.css";

interface BoxContainerProps {
  children: React.ReactNode;
}

const BoxContainer: React.FC<BoxContainerProps> = ({ children }) => {
  return <div className="box-container">{children}</div>;
};

export default BoxContainer;
