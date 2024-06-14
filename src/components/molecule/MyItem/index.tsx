import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import { blackColorStyle } from "@/styles/color";
import React from "react";

interface MyItemProps {
  title: string;
  content: string;
  onClick: (url: string) => void;
  url?: string;
}

const MyItem: React.FC<MyItemProps> = ({ title, content, onClick, url }) => {
  return (
    <div className="flex flex-col justify-between border border-black w-500 h-250 p-7">
      <div>
        <Label className="pretendardNormalFont-24 mb-2">{title}</Label>
        <Label className="pretendardNormalFont-20">{content}</Label>
      </div>
      <div className="flex flex-row justify-end">
        <div style={ItemButtonStyle}>
          <Button
            onClick={() => {
              if (url) onClick(url);
            }}
            className="w-full h-full flex flex-row items-center justify-center"
          >
            <img src="Arrow.svg" />
          </Button>
        </div>
      </div>
    </div>
  );
};

const ItemButtonStyle = {
  padding: "0",
  width: "180px",
  height: "45px",
  clipPath: "ellipse(90px 22px)",
  ...blackColorStyle,
};

export default MyItem;
