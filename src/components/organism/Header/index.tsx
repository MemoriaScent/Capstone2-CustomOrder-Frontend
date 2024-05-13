import CartButton from "@/components/molecule/CartButton";
import NavigationButton from "@/components/molecule/NavigationButton";
import { BasePorps } from "@/components/Types";
import React from "react";

const Header: React.FC<BasePorps> = () => {
  return (
    <div className="flex justify-between items-center h-16 px-5">
      <NavigationButton />
      <CartButton />
    </div>
  );
};

export default Header;
