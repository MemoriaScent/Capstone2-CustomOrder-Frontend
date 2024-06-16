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

const Custom3: React.FC<CustomProps> = ({ nextLevel }) => {
  const [story, setStory] = useState<string>("");
  const [custom, setCustom] = useAtom(customAtom);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setStory(event.target.value);
  };

  return (
    <div className="flex flex-col mt-60 items-center z-10">
      <Label className="text-center textTest">
        항기에 담고 싶은 내용을 이야기해주세요
      </Label>
      <Input
        className="w-700 h-250 border border-black rounded-none p-4 my-50 pretendardNormalFont-20"
        type="textarea"
        onChange={onChange}
      ></Input>
      <Button
        className="w-300 h-50 bg-black text-white rounded-none mb-4 pretendardNormalFont-18"
        onClick={() => {
          setCustom({
            image: custom.image,
            story: story,
            taste: custom.taste,
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

export default Custom3;
