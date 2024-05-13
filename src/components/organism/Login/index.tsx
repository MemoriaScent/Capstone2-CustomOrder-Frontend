"use client";
import Button from "@/components/atoms/Button";
import Divider from "@/components/atoms/Divider";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import AuthTitle from "@/components/molecule/AuthTitle";
import LoginFrom from "@/components/molecule/LoginFrom";
import { whiteColorStyle } from "@/styles/color";
import { pretendardAuthTitleFontStyle } from "@/styles/font";
import { blackFontColor } from "@/styles/fontColor";
import React from "react";

interface LoginProps {
  children: React.ReactNode;
  css: string;
  className: string;
}

const LoginOrganism: React.FC<LoginProps> = ({ children, css, className }) => {
  return (
    <div
      style={{ ...colorStyle, ...boxStyle }}
      className="flex flex-col justify-center items-center pb-20 pt-30"
    >
      <AuthTitle css={authTitleStyle}>LOG IN</AuthTitle>

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

const authTitleStyle = {
  marginBottom: "30px",
  textAlign: "center",
  ...pretendardAuthTitleFontStyle,
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
