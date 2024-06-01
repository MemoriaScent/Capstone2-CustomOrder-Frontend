import Label from "@/components/atoms/Label";
import React from "react";

interface ItemsProps {
  children: React.ReactNode;
  count: Number;
  price: Number;
}

const Items: React.FC<ItemsProps> = ({ children, count, price }) => {
  return (
    <div className="flex flex-col border border-black divide-y divide-black w-1136">
      <div className="flex flex-row h-60 ">
        <Label className="w-710 flex items-center px-8 pretendardNormalFont-20">
          상품 정보
        </Label>
        <Label className="w-163 flex items-center justify-center pretendardNormalFont-20">
          수량
        </Label>
        <Label className="w-263 flex items-center justify-center pretendardNormalFont-20">
          가격
        </Label>
      </div>
      <div className="divide-y divide-black">{children}</div>
      <div className="flex flex-row h-60">
        <div className="w-710"></div>
        <Label className="w-163 flex items-center justify-center pretendardNormalFont-20">
          {count}
        </Label>
        <Label className="w-263 flex items-center justify-center pretendardNormalFont-20">
          {price.toLocaleString("ko-KR") + "원"}
        </Label>
      </div>
    </div>
  );
};

export default Items;
