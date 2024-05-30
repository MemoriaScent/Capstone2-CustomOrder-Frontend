"use client";
import CartButton from "@/components/molecule/CartButton";
import NavigationButton from "@/components/molecule/NavigationButton";
import React, { useState } from "react";
import Menu from "../Menu";

const Header = () => {
  const [showMenuModal, setShowMenuModal] = useState(false);
  const clickMenu = (event) => {
    event.preventDefault;
    setShowMenuModal(true);
  };
  const clickCloseMenu = (event) => {
    event.preventDefault;
    setShowMenuModal(false);
  };
  const completeMenu = () => {
    setShowMenuModal(false);
  };
  return (
    <div className="flex justify-between items-center bg-black h-16 px-5">
      <NavigationButton clickMenu={clickMenu} />
      <CartButton />
      {showMenuModal && (
        <Menu clickCloseMenu={clickCloseMenu} completeMenu={completeMenu} />
      )}
    </div>
  );
};

export default Header;
