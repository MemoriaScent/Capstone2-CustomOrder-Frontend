"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import Title from "@/components/molecule/Title";
import React from "react";

interface FormProps {
  Props: any;
  onClick: () => void;
  className?: string;
}

const TextInputForm: React.FC<FormProps> = (Props) => {
  return (
    <div className="flex flex-col pt-20 pb-200 items-center">
      <Title className="mb-45">{Props.title}</Title>
      <div className="mb-10">
        <Label>{Props.inputTitle}</Label>
        <Input
          type="text"
          className="border border-black w-500 h-10 mt-2"
        ></Input>
      </div>
      <Input
        type="textarea"
        placeholder={Props.placeholder}
        className="border border-black h-300 w-500 mb-60"
      ></Input>
      <Button className="w-500 h-50 bg-black text-white">
        {Props.buttonTitle}
      </Button>
    </div>
  );
};

export default TextInputForm;
