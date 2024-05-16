import CompanyInfo from "@/components/molecule/CompanyInfo";
import CustomerCenter from "@/components/molecule/CustomerCenter";
import { blackColorStyle } from "@/styles/color";
import { whiteFontColor } from "@/styles/fontColor";
import React from "react";

const Footer = () => {
  return (
    <div style={colorStyle} className="flex justify-between px-20 pb-20 pt-10">
      <CompanyInfo css={colorStyle} className="" />
      <CustomerCenter css={colorStyle} className="" />
    </div>
  );
};

const colorStyle = {
  ...whiteFontColor,
  ...blackColorStyle,
};

export default Footer;
