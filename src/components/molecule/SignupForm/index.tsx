'use client'
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import { pretendardAuthLabelFontStyle } from "@/styles/font";
import { whiteFontColor } from "@/styles/fontColor";
import React from "react";
import { useAtom } from "jotai";
import { signupAtom } from "./JAtom";
import useSignUp from "./useSignUp";
import { CSSObject } from "@emotion/react";
const SignupForm = () => {
  const [signupData,setSignupData] = useAtom(signupAtom)
  const {
    handleclick,
    handleEmail,
    handlePw,
    handlePwChk,
    handleName,
    handlePhone,
    handleAddr,
    handleZipcode,
    handleAddrDet,
    
  } = useSignUp()
  return (
    <div>
      <div className="flex flex-col mb-4">
        <Label css={InputLabel} className="mt-14 mb-2">
          이메일
        </Label>
        <div className="flex flex-row justify-between">
          <Input onChange={(e)=>{
            handleEmail(e)
          }} className="border-x border-y border-solid border-black w-400 h-10" />
          <Button css={CheckButtonLabel} onClick={handleclick} className="bg-black w-90 h-10">
            중복확인
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <Label css={InputLabel} className="mb-2">
          비밀번호
        </Label>
        <Input
          onChange={(e)=>{
            handlePw(e)
          }}
          type="password"
          placeholder="영어, 숫자, 특수문자를 포함한 8~19자"
          className="border-x border-y border-solid border-black w-500 h-10"
        />
      </div>
      <div className="mb-4">
        <Label css={InputLabel} className="mb-2">
          비밀번호 확인
        </Label>
        <Input
          onChange={(e)=>{
            handlePwChk(e)
          }}
          type="password"
          className="border-x border-y border-solid border-black w-500 h-10"
        />
      </div>
      <div className="mb-4">
        <Label css={InputLabel} className="mb-2">
          이름
        </Label>
        <Input
          onChange={(e)=>{
            handleName(e)
          }}
          type="text"
          className="border-x border-y border-solid border-black w-500 h-10"
        />
      </div>

      <div className="mb-4">
        <Label css={InputLabel} className="mb-2">
          전화번호
        </Label>
        <div className="flex flex-row justify-between items-center">
          <Input
            onChange={handlePhone(0)}
            type="text"
            className="border-x border-y border-solid border-black w-150 h-10"
          />
          <div>-</div>
          <Input
            onChange={handlePhone(1)}
            type="text"
            className="border-x border-y border-solid border-black w-150 h-10"
          />
          <div>-</div>
          <Input
            onChange={handlePhone(2)}
            type="text"
            className="border-x border-y border-solid border-black w-150 h-10"
          />
        </div>
      </div>
      <div className="mb-14">
        <Label css={InputLabel} className="mb-2">
          주소
        </Label>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between mb-4">
            <Input
              onChange={handleZipcode}
              type="text"
              placeholder="우편번호"
              className="border-x border-y border-solid border-black w-369 h-10"
            />
            <Button className="w-121 h-10 bg-black" css={CheckButtonLabel}>
              우편번호 찾기
            </Button>
          </div>
          <Input
            onChange={handleAddr}
            type="text"
            placeholder="주소"
            className="border-x border-y border-solid border-black w-500 h-10 mb-4"
          />
          <Input
            onChange={handleAddrDet}
            type="text"
            placeholder="상세주소"
            className="border-x border-y border-solid border-black w-500 h-10"
          />
        </div>
      </div>
    </div>
  );
};

const InputLabel = {
  ...pretendardAuthLabelFontStyle,
};

const CheckButtonLabel = {
  ...pretendardAuthLabelFontStyle,
  ...whiteFontColor,
};

export default SignupForm;
