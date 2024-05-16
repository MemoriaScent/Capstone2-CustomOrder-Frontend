import CartButton from "@/components/molecule/CartButton";
import NavigationButton from "@/components/molecule/NavigationButton";
import { BasePorps } from "@/components/Types";
import React from "react";

const Header = () => {
  return (
    <div className="flex justify-between items-center bg-black h-16 px-5">
      <NavigationButton />
      <CartButton />
    </div>
  );
};

export default Header;
