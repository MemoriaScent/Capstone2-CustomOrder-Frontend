"use client";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import Keyword from "@/components/molecule/Keyword";
import React from "react";

interface CustomProps {
  complete: () => void;
}

const Custom6: React.FC<CustomProps> = ({ complete }) => {
  return (
    <div className="flex flex-col mt-60 items-center z-10">
      <Label className="text-center mb-2.5 textTest">
        향기의 키워드를 정리해봤어요
      </Label>
      <Label>제외하고 싶은 키워드가 있따면 삭제해보세요</Label>
      <div className="flex flex-row">
        <div className="flex flex-col items-start mr-10">
          <Label>LIKE</Label>
          <div className="flex flex-wrap content-start w-320 h-230 border border-black p-4">
            <Keyword>플로럴</Keyword>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <Label>HATE</Label>
          <div className="flex flex-wrap content-start w-320 h-230 border border-black p-4">
            <Keyword>달콤한</Keyword>
            <Keyword>우드</Keyword>
            <Keyword>스파이시</Keyword>
          </div>
        </div>
      </div>
      <Button
        className="w-300 h-50 bg-black text-white rounded-none mt-60"
        onClick={complete}
      >
        향기 담기
      </Button>
    </div>
  );
};

export default Custom6;
