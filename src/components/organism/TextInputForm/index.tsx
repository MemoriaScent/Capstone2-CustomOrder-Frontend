"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import Title from "@/components/molecule/Title";
import React from "react";

interface FormProps {
  title: string;
  inputTitle: string;
  placeholder: string;
  buttonTitle: string;
}

const TextInputForm: React.FC<FormProps> = ({
  title,
  inputTitle,
  placeholder,
  buttonTitle,
}) => {
  return (
    <div className="flex flex-col pt-20 pb-200 items-center">
      <Title>{title}</Title>
      <div className="mb-10">
        <Label>{inputTitle}</Label>
        <Input
          type="text"
          className="border border-black w-500 h-10 mt-2"
        ></Input>
      </div>
      <Input
        type="textarea"
        placeholder={placeholder}
        className="border border-black h-300 w-500 mb-60"
      ></Input>
      <Button onClick={() => {}} className="w-500 h-50 bg-black text-white">
        {buttonTitle}
      </Button>
    </div>
  );
};

export default TextInputForm;
