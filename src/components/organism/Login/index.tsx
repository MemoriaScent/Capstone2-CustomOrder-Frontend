"use client";
import Button from "@/components/atoms/Button";
import Divider from "@/components/atoms/Divider";
import AuthTitle from "@/components/molecule/AuthTitle";
import LoginFrom from "@/components/molecule/LoginForm";
import { whiteColorStyle } from "@/styles/color";
import { blackFontColor } from "@/styles/fontColor";
import React from "react";

const LoginOrganism = () => {
  return (
    <div
      style={{ ...colorStyle, ...boxStyle }}
      className="flex flex-col justify-center items-center pb-20 pt-30"
    >
      <AuthTitle>LOG IN</AuthTitle>

      <LoginFrom />
      <Divider />
      <Button
        onClick={() => {}}
        className="bg-black w-500 h-12 text-white mt-14"
      >
        회원가입
      </Button>
    </div>
  );
};

const boxStyle = {
  paddingTop: "80px",
  paddingBottom: "200px",
};

const colorStyle = {
  ...blackFontColor,
  ...whiteColorStyle,
};

export default LoginOrganism;
