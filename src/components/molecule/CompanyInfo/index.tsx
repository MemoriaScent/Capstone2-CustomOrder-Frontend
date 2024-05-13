import Label from "@/components/atoms/Label";
import {
  pretendardFooterLabelFontStyle,
  pretendardFooterTitleFontStyle,
} from "@/styles/font";
import React from "react";

interface CompanyInfoProps {
  children: React.ReactNode;
  css: string;
  className: string;
}

const CompanyInfo: React.FC<CompanyInfoProps> = ({
  children,
  css,
  className,
}) => {
  return (
    <div className={className}>
      <Label css={{ css, ...companyInfoStyle }}>Company Info</Label>
      <Label css={{ css, ...footerLabelStyle }} className="">
        MemoriaScent
      </Label>
      <Label css={{ css, ...footerLabelStyle }} className="">
        주소 | 부산광역시 부산진구 엄광로 176번길, 산학협력관 412호(동의대학교)
      </Label>
      <Label css={{ css, ...footerLabelStyle }} className="">
        사업자등록번호 | 000-00-00000
      </Label>
      <Label css={{ css, ...footerLabelStyle }} className="">
        통신판매신고번호 | 0000-0000-00000
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

export default CompanyInfo;
