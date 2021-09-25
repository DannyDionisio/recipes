import React from "react";
import classnames from "classnames";

import "./styles.css";

type ButtonProps = React.DetailedHTMLProps<
  React.ButtonHTMLAttributes<HTMLButtonElement>,
  HTMLButtonElement
> & {
  variation?: "primary";
  isBlock?: boolean | undefined;
};

const Button: React.FC<ButtonProps> = ({
  variation = "primary",
  isBlock,
  ...rest
}) => {
  const className = classnames(
    "button",
    `button--${variation}`,
    "button--end",
    {
      "button--block": isBlock,
    }
  );

  return <button className={className} {...rest} />;
};

export default Button;
