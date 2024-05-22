"use client";
import Button from "@/components/atoms/Button";
import { BasePorps } from "@/components/Types";
import { orangeColorStyle } from "@/styles/color";
import React from "react";

const CartButton: React.FC<BasePorps> = ({ children, css, className }) => {
  return (
    <div style={{ ...CartButtonStyle, ...orangeColorStyle }}>
      <Button
        onClick={() => {}}
        className={"flex justify-center items-center w-full h-full"}
      >
        cart
      </Button>
    </div>
  );
};

const CartButtonStyle = {
  padding: "0",
  width: "120px",
  height: "30px",
  clipPath: "ellipse(60px 15px)",
};

export default CartButton;
