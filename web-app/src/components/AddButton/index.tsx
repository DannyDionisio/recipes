import React from "react";

import "./styles.css";

type AddButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  title: string;
  source: string;
};

const AddButton: React.FC<AddButtonProps> = ({
  title,
  source,
  children,
  ...rest
}) => {
  return (
    <button className="add-button" {...rest}>
      <img src={source} alt={`Icon for ${title}`} />
      <span>{children}</span>
    </button>
  );
};

export default AddButton;
