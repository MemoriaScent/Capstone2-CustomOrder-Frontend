/** @jsxImportSource @emotion/react */
import { css, CSSObject } from "@emotion/react";
import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  className?: string;
  css?: CSSObject;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  css: cssProp,
}) => {
  return (
    <button
      css={css(cssProp)}
      onClick={onClick}
      className={`px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
