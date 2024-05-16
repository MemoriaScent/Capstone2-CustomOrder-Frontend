"use client";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";
import Signin from "@/components/organism/SignIn";
import React from "react";

const SigninTamplate = () => {
  return (
    <div>
      <Header />
      <Signin />
      <Footer />
    </div>
  );
};

export default SigninTamplate;
