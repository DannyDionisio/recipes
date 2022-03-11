import React, { FC } from "react";

const Menu: FC = ({ children }) => {
  return (
    <nav className="menu">
      <ul>
        {children}
      </ul>
    </nav>
  );
};

export default Menu;
