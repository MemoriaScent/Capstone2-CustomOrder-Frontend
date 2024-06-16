"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import { customAtom } from "@/components/templates/CustomTemplate/JAtom";
import { useAtom } from "jotai";
import React, { useState } from "react";

interface CustomProps {
  nextLevel: () => void;
}

const Custom4: React.FC<CustomProps> = ({ nextLevel }) => {
  const [taste, setTaste] = useState<string>("");
  const [custom, setCustom] = useAtom(customAtom);

  const onChange = (event: React.ChangeEvent<HTMLTextAreaElement>) => {
    setTaste(event.target.value);
  };
  return (
    <div className="flex flex-col mt-60 items-center z-10">
      <Label className="text-center textTest">
        당신의 향기 취향에 대해 이야기해주세요
      </Label>

      <textarea
        className="w-700 h-250 border border-black rounded-none p-4 my-50 pretendardNormalFont-20 text-wrap"
        value={taste}
        onChange={onChange}
      ></textarea>
      <Button
        className="w-300 h-50 bg-black text-white rounded-none mb-4 pretendardNormalFont-18"
        onClick={() => {
          setCustom({
            image: custom.image,
            story: custom.story,
            taste: taste,
            name: custom.name,
          });
          nextLevel();
        }}
      >
        다음
      </Button>
    </div>
  );
};

export default Custom4;
