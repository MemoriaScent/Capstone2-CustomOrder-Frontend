import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import { BasePorps } from "@/components/Types";
import { pretendardAuthLabelFontStyle } from "@/styles/font";
import React from "react";

const LoginFrom: React.FC<BasePorps> = ({ children, css, className }) => {
  return (
    <form>
      <div className="flex flex-col">
        <Label css={InputLabel} className="mt-14 mb-2">
          이메일
        </Label>
        <Input className="border-x border-y border-solid border-black w-500 h-10 mb-4" />
      </div>
      <div>
        <Label css={InputLabel} className="mb-2">
          비밀번호
        </Label>
        <Input
          type="password"
          className="border-x border-y border-solid border-black w-500 h-10 mb-14"
        />
      </div>
      <Button
        onClick={() => {}}
        className="bg-custom-orange w-500 h-12 text-white mb-14"
      >
        로그인
      </Button>
    </form>
  );
};

const InputLabel = {
  ...pretendardAuthLabelFontStyle,
};

export default LoginFrom;
