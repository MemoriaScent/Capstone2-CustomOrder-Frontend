/** @jsxImportSource @emotion/react */
import { css, CSSObject } from "@emotion/react";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ children, onClick, className }) => {
  return (
    <button onClick={onClick} className={` px-4 ${className}`}>
      {children}
    </button>
  );
};

export default Button;
