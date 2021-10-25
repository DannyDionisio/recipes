import React from "react";

interface MenuProps {
  children: string;
}

const Menu = (props: MenuProps) => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="/">{props.children}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
