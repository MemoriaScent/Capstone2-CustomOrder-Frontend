import Label from "@/components/atoms/Label";
import {
  pretendardFooterLabelFontStyle,
  pretendardFooterNumberFontStyle,
  pretendardFooterTitleFontStyle,
} from "@/styles/font";
import React from "react";

interface CustomerCenterProps {
  children: React.ReactNode;
  css: string;
  className: string;
}

const CustomerCenter: React.FC<CustomerCenterProps> = ({
  children,
  css,
  className,
}) => {
  return (
    <div className={className}>
      <Label css={{ css, ...companyInfoStyle }}>Customer Center</Label>
      <Label css={{ css, ...footerNumberStyle }}>0000-0000</Label>
      <Label css={{ css, ...footerLabelStyle }} className="">
        10:00 - 17:00
      </Label>
      <Label css={{ css, ...footerLabelStyle }} className="">
        토, 일요일 및 공휴일 휴무
      </Label>
    </div>
  );
};

const companyInfoStyle = {
  marginBottom: "50px",
  ...pretendardFooterTitleFontStyle,
};

const footerLabelStyle = {
  marginBottom: "10px",
  ...pretendardFooterLabelFontStyle,
};

const footerNumberStyle = {
  marginBottom: "30px",
  ...pretendardFooterNumberFontStyle,
};

export default CustomerCenter;
