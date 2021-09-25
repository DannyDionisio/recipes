import React from "react";

import "./styles.css";

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> & {
  name: string;
  label?: string;
};

const Input: React.FC<InputProps> = ({ name, label, ...inputProps }) => {
  return (
    <div className="form-field">
      <label htmlFor={name}>{label}</label>
      <input id={name} className="form-field__input" {...inputProps} />
    </div>
  );
};

export default Input;
