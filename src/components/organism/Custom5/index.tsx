"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import { customAtom } from "@/components/templates/CustomTemplate/JAtom";
import { useAtom } from "jotai";
import React, { useState } from "react";

interface CustomProps {
  handleSubmit: () => void;
}

const Custom5: React.FC<CustomProps> = ({ handleSubmit }) => {
  const [name, setName] = useState<string>("");
  const [custom, setCustom] = useAtom(customAtom);

  const onChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  return (
    <div className="flex flex-col mt-60 items-center z-10">
      <Label className="text-center mb-2.5 textTest">
        향기에 이름을 붙여보세요
      </Label>
      <Label>
        {'만약 원하시는 이름이 없을 경우 라벨링이 "Untitle" 로 제작됩니다.'}
      </Label>
      <Input
        className="w-700 h-50 border border-black rounded-none p-4 my-120"
        type="text"
        onChange={onChange}
      ></Input>
      <Button
        className="w-300 h-50 bg-black text-white rounded-none mb-4"
        onClick={() => {
          setCustom({
            image: custom.image,
            story: custom.story,
            taste: custom.taste,
            name: name,
          });
          console.log(custom);
          handleSubmit();
        }}
      >
        다음
      </Button>
    </div>
  );
};

export default Custom5;
