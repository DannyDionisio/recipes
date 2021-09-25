import React from "react";

// import "./styles.css";

interface MenuProps {
  title: string;
}

const Menu = (props: MenuProps) => {
  return (
    <nav className="menu">
      <ul>
        <li>
          <a href="/">{props.title}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Menu;
