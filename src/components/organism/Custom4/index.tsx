"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import React from "react";

interface CustomProps {
  nextLevel: () => void;
}

const Custom4: React.FC<CustomProps> = ({ nextLevel }) => {
  return (
    <div className="flex flex-col mt-60 items-center z-10">
      <Label className="text-center textTest">
        당신의 향기 취향에 대해 이야기해주세요
      </Label>
      <Input
        className="w-700 h-250 border border-black rounded-none p-4 my-50"
        type="textarea"
      ></Input>
      <Button
        className="w-300 h-50 bg-black text-white rounded-none mb-4"
        onClick={nextLevel}
      >
        다음
      </Button>
    </div>
  );
};

export default Custom4;
