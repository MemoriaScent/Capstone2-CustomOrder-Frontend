import Label from "@/components/atoms/Label";
import { BasePorps } from "@/components/Types";
import React from "react";

interface TitleProps {
  children: React.ReactNode;
}

const Title: React.FC<TitleProps> = ({ children }) => {
  return (
    <div>
      <Label className="mb-30 text-center pretendardSemiBoldFont-32">
        {children}
      </Label>
    </div>
  );
};

export default Title;
