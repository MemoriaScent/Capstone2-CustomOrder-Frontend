import React from "react";

interface LabelProps {
  children: React.ReactNode;
  className: string;
}

const Label: React.FC<LabelProps> = ({ children,className }) => {
  return (
    <div className={className}>
      {children}
    </div>
  );
};

export default Label;
