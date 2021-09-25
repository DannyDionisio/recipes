import React from "react";

import "./styles.css";

type AddButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
  source: string;
  icon: string;
};

const AddButton: React.FC<AddButtonProps> = ({
  title,
  source,
  icon,
  ...rest
}) => {
  return (
    <button className="add-button" {...rest}>
      <img src={source} alt={icon} />
      <span>{title}</span>
    </button>
  );
};

export default AddButton;
