"use client";
import Button from "@/components/atoms/Button";
import Divider from "@/components/atoms/Divider";
import AuthTitle from "@/components/molecule/AuthTitle";
import SignupForm from "@/components/molecule/SignupForm";
import { whiteColorStyle } from "@/styles/color";
import { pretendardAuthTitleFontStyle } from "@/styles/font";
import { blackFontColor } from "@/styles/fontColor";
import React from "react";
import useSignUp from "@/components/molecule/SignupForm/useSignUp";
import { useRouter } from "next/navigation";
const Signup = () => {
  const { handleClick } = useSignUp();
  const router = useRouter();
  return (
    <form
      style={{ ...colorStyle, ...boxStyle }}
      className="flex flex-col justify-center items-center pb-20 pt-30"
    >
      <AuthTitle>SIGN UP</AuthTitle>
      <SignupForm />
      <Divider />
      <Button
        onClick={async (event) => {
          const state = await handleClick(event);
          if (state === 200) {
            alert("회원가입 성공!");
            router.push("/auth/login");
          }
        }}
        className="bg-custom-orange w-500 h-12 text-white mt-14"
      >
        회원가입
      </Button>
    </form>
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

export default Signup;
