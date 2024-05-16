"use client";
import Button from "@/components/atoms/Button";
import Divider from "@/components/atoms/Divider";
import AuthTitle from "@/components/molecule/AuthTitle";
import SigninForm from "@/components/molecule/SigninForm";
import { whiteColorStyle } from "@/styles/color";
import { pretendardAuthTitleFontStyle } from "@/styles/font";
import { blackFontColor } from "@/styles/fontColor";
import React from "react";

const Signin = () => {
  return (
    <div
      style={{ ...colorStyle, ...boxStyle }}
      className="flex flex-col justify-center items-center pb-20 pt-30"
    >
      <AuthTitle css={authTitleStyle}>SIGN IN</AuthTitle>
      <SigninForm />
      <Divider />
      <Button
        onClick={() => {}}
        className="bg-custom-orange w-500 h-12 text-white mt-14"
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

export default Signin;
