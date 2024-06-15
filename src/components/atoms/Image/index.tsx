import React from "react";

interface BoxProps {
  src: string;
  className?: string;
}

const Image: React.FC<BoxProps> = ({ src, className }) => {
  return <img src={src} className={className}></img>;
};

export default Image;
