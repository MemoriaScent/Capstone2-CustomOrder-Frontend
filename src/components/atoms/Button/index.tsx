import React from "react";

interface ButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  css?: string;
}

const Button: React.FC<ButtonProps> = ({
  children,
  onClick,
  className,
  css,
}) => {
  return (
    <button
      style={css}
      onClick={onClick}
      className={` px-4 rounded ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
