import Label from "@/components/atoms/Label";
import React from "react";

interface AccountItemProps {
  children: React.ReactNode;
  title: string;
}

const AccountItem: React.FC<AccountItemProps> = ({ children, title }) => {
  return (
    <div className="flex flex-row">
      <Label className="w-200 flex items-center justify-center h-100% border-r border-black">
        {title}
      </Label>
      <Label className="w-800 px-7 py-5">{children}</Label>
    </div>
  );
};

export default AccountItem;
