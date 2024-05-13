import React from "react";

interface LabelProps {
  children: React.ReactNode;
  css: string;
  className: string;
}

const Label: React.FC<LabelProps> = ({ children, css, className }) => {
  return (
    <div style={css} className={className}>
      {children}
    </div>
  );
};

export default Label;
