import Label from "@/components/atoms/Label";
import React from "react";

const CustomerCenter = ({}) => {
  return (
    <div className="bg-black text-white">
      <Label className="pretendardNormalSemiBoldFont-20">Customer Center</Label>
      <Label className="pretendardNormalFont-24 mb-15">0000-0000</Label>
      <Label className="pretendardNormalFont-18 mb-2.5">10:00 - 17:00</Label>
      <Label className="pretendardNormalFont-18 mb-2.5">
        토, 일요일 및 공휴일 휴무
      </Label>
    </div>
  );
};

export default CustomerCenter;
