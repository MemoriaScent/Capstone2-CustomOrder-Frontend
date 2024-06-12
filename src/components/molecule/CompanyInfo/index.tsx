import Label from "@/components/atoms/Label";
import React from "react";

const CompanyInfo = ({}) => {
  return (
    <div className="bg-black text-white">
      <Label className="mb-50 pretendardNormalFont-20">Company Info</Label>
      <Label className="mb-2.5 pretendardNormalFont-18">MemoriaScent</Label>
      <Label className="mb-2.5 pretendardNormalFont-18">
        주소 | 부산광역시 부산진구 엄광로 176번길, 산학협력관 412호(동의대학교)
      </Label>
      <Label className="mb-2.5 pretendardNormalFont-18">
        사업자등록번호 | 000-00-00000
      </Label>
      <Label className="mb-2.5 pretendardNormalFont-18">
        통신판매신고번호 | 0000-0000-00000
      </Label>
    </div>
  );
};

export default CompanyInfo;
