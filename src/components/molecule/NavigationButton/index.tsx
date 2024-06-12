import Button from "@/components/atoms/Button";
import React from "react";

interface NavigationButtonProps {
  clickMenu: (event: any) => void;
}

const NavigationButton: React.FC<NavigationButtonProps> = ({ clickMenu }) => {
  return (
    <div>
      <Button
        onClick={clickMenu}
        className={"w-5 h-3 border-y-2 rounded-none border-white"}
      >
        {" "}
      </Button>
    </div>
  );
};

export default NavigationButton;
