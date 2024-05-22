"use client";
import Button from "@/components/atoms/Button";
import { BasePorps } from "@/components/Types";
import React from "react";

const NavigationButton: React.FC<BasePorps> = ({
  children,
  css,
  className,
}) => {
  return (
    <div>
      <Button
        onClick={() => {}}
        className={"w-5 h-3 border-y-2 rounded-none border-white"}
      ></Button>
    </div>
  );
};

export default NavigationButton;
