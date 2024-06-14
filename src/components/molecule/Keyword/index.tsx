import Button from "@/components/atoms/Button";
import React from "react";

interface KeywordProps {
  key: number;
  children: React.ReactNode;
}

const Keyword: React.FC<KeywordProps> = ({ children }) => {
  return (
    <div className="flex flex-row items-center border border-black h-30 rounded-full pl-3 mb-3 mr-5">
      {children}
      <Button onClick={() => {}} className="p-0 m-0">
        ×
      </Button>
    </div>
  );
};

export default Keyword;
