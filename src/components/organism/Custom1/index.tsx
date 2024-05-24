"use client";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";

const Custom1 = () => {
  return (
    <div className="mt-180 z-10">
      <Label className="text-center mb-110">
        커스텀 디퓨저는 향기 인증 절차를 밟은 후 배송되는 제품으로 <br />
        제작부터 배송까지 약 4주 정도의 시간이 소요됩니다.
        <br />
        이를 인지하셨고 계속하여 구매를 원하시는 경우 “네” 버튼을 눌러주세요.
      </Label>
      <div className="flex flex-col items-center">
        <Button className="w-300 h-50 bg-black text-white rounded-none mb-4">
          네
        </Button>
        <Button className="w-300 h-50 bg-white text-black rounded-none border border-black">
          아니요
        </Button>
      </div>
    </div>
  );
};

export default Custom1;
