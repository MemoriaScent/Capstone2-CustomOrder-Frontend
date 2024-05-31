import Divider from "@/components/atoms/Divider";
import Label from "@/components/atoms/Label";
import { BasePorps } from "@/components/Types";
import React from "react";

const AuthTitle: React.FC<BasePorps> = ({ children, css, className }) => {
  return (
    <div>
      <Label className="mb-30 text-center pretendardSemiBoldFont-32">
        {children}
      </Label>
      <Divider />
    </div>
  );
};

export default AuthTitle;
