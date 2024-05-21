import Label from "@/components/atoms/Label";

const OderInfo = () => {
  return (
    <div className="flex flex-row justify-between w-1136 mb-20">
      <div className="flex flex-row divide-x divide-black border border-black">
        <div className="w-135 divide-y divide-black">
          <Label className="flex justify-center items-center h-100">
            주문 번호
          </Label>
          <Label className="flex justify-center items-center h-100">
            주문 일자
          </Label>
          <Label className="flex justify-center items-center h-100">
            주문 상태
          </Label>
          <Label className="flex justify-center items-center h-100">
            송장번호
          </Label>
        </div>
        <div className="w-400 divide-y divide-black">
          <Label className="flex justify-start p-8 items-center h-100">
            24051900001
          </Label>
          <Label className="flex justify-start p-8 items-center h-100">
            2024.05.12. 14:06:38
          </Label>
          <Label className="flex justify-start p-8 items-center h-100">0</Label>
          <Label className="flex justify-start p-8 items-center h-100">
            265654413218982
          </Label>
        </div>
      </div>
      <div className="flex flex-row divide-x divide-black border border-black">
        <div className="w-135 divide-y divide-black">
          <Label className="flex justify-center items-center h-100">이름</Label>
          <Label className="flex justify-center items-center h-100">
            전화번호
          </Label>
          <Label className="flex justify-center items-center h-200">주소</Label>
        </div>
        <div className="w-400 divide-y divide-black">
          <Label className="flex justify-start p-8 items-center h-100">
            24051900001
          </Label>
          <Label className="flex justify-start p-8 items-center h-100">
            2024.05.12. 14:06:38
          </Label>
          <Label className="flex justify-start p-8 items-center h-200">
            47340
            <br />
            부산 부산진구 엄광로 176
            <br />
            산학협력관 412호
          </Label>
        </div>
      </div>
    </div>
  );
};

export default OderInfo;
