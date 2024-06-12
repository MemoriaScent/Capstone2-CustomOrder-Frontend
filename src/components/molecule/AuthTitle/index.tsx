import Divider from "@/components/atoms/Divider";
import Label from "@/components/atoms/Label";
import React from "react";

interface AuthTitleProps {
  children: React.ReactNode;
}

const AuthTitle: React.FC<AuthTitleProps> = ({ children }) => {
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
