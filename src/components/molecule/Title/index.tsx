import Label from "@/components/atoms/Label";
import { BasePorps } from "@/components/Types";
import { pretendardAuthTitleFontStyle } from "@/styles/font";
import React from "react";

const Title: React.FC<BasePorps> = ({ children, className }) => {
  return (
    <div>
      <Label css={titleStyle}>{children}</Label>
    </div>
  );
};

export default Title;

const titleStyle = {
  marginBottom: "30px",
  textAlign: "center",
  ...pretendardAuthTitleFontStyle,
};
