import React, { FC } from "react";

const Menu: FC = ({ children }) => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="/">{children}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
