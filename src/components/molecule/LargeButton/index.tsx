import Button from "@/components/atoms/Button";
import React from "react";

interface LargeButtonProps {
  children: React.ReactNode;
  onClick: () => void;
  className?: string;
  css?: string;
}

const LargeBlackButton: React.FC<LargeButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <div>
      <Button className="w-500 h-50 bg-black text-white" onClick={onClick}>
        {children}
      </Button>
    </div>
  );
};

const LargeOrangeButton: React.FC<LargeButtonProps> = ({
  children,
  onClick,
}) => {
  return (
    <Button
      className="w-500 h-50 bg-custom-orange text-white"
      onClick={onClick}
    >
      {children}
    </Button>
  );
};

export default { LargeBlackButton, LargeOrangeButton };
