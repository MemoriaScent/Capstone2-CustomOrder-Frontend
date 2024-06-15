"use client";

import Label from "@/components/atoms/Label";
import CustomBGImage from "@/components/organism/CustomBGImage";

const Test = () => {
  return (
    <div className="relative w-100vw h-66vw">
      <CustomBGImage />
      <div className="absolute w-full h-full flex justify-center">
        <div className="absolute z-10 w-full h-full flex justify-center bg-black cursor-wait opacity-10"></div>
        <div className=" flex flex-col items-center justify-center w-1300 h-45vw border-x border-t border-black bg-white">
          <div className="z-30 bg-white border p-32 flex flex-col items-center rounded-[30px] cursor-wait ">
            <Label className=" mb-20 pretendardNormalFont-16">
              당신의 이야기를 향기로 변환하고 있어요.
            </Label>
            <img
              src="/loading.svg"
              width="20"
              height="20"
              className="animate-spin w-20 h-20 "
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Test;
