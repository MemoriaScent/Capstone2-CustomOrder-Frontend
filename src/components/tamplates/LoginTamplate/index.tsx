"use client";
import Footer from "@/components/organism/footer";
import Header from "@/components/organism/Header";
import LoginOrganism from "@/components/organism/Login";
import React from "react";

const LoginTamplate = () => {
  return (
    <div>
      <Header />
      <LoginOrganism />
      <Footer />
    </div>
  );
};

export default LoginTamplate;
