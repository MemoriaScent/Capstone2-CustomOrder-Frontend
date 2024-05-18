import Label from "@/components/atoms/Label";
import React from "react";

interface AccountItemProps {
  children: React.ReactNode;
  css: string;
  className: string;
  props: any;
}

const AccountItem: React.FC<AccountItemProps> = ({
  className,
  css,
  children,
  ...props
}) => {
  return (
    <div className="flex flex-row">
      <Label className="w-200 flex items-center justify-center h-100% border-r border-black">
        {props.title}
      </Label>
      <Label className="w-800 px-7 py-5">{children}</Label>
    </div>
  );
};

export default AccountItem;
