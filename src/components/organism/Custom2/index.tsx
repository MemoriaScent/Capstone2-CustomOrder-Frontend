"use client";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";

const Custom2 = () => {
  return (
    <div className="mt-180 z-10">
      <Label className="text-center mb-110">
        향기로 담고 싶은 사진을 업로드해주세요
      </Label>

      <div className="flex flex-col items-center">
        <Button className="w-300 h-50 bg-black text-white rounded-none mb-4">
          사진 업로드 하기
        </Button>
        <Button className="w-300 h-50 bg-white text-black rounded-none border border-black">
          건너뛰기
        </Button>
      </div>
    </div>
  );
};

export default Custom2;
