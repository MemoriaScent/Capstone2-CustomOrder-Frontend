"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import { pretendardAuthLabelFontStyle } from "@/styles/font";
import React from "react";
import { useAtom } from "jotai";
import { signupAtom } from "./JAtom";
import useSignUp from "./useSignUp";
import { useState } from "react";
import DaumPostcodeModal from "../DaumPostcodeModal";

const SignupForm = () => {
  const [signup, setSignup] = useAtom(signupAtom);
  const [address, setAddress] = useState({ zonecode: "", address: "" });
  const [showPostCodeModal, setShowPostCodeModal] = useState(false);
  const clickPostCodeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(showPostCodeModal);
    setShowPostCodeModal(!showPostCodeModal);
  };
  const completeAddress = (zonecode: string, address: string) => {
    setAddress({ zonecode, address });
    setSignup((prevSignup) => ({
      ...prevSignup,
      location: {
        ...prevSignup.location,
        zonecode,
        address,
      },
    }));
    setShowPostCodeModal(!showPostCodeModal);
  };

  const {
    handleclick,
    handleEmail,
    handlePw,
    handlePwChk,
    handleName,
    handlePhone,
    handleArrDet,
    handleDupLogin,
  } = useSignUp();
  return (
    <div>
      <div className="flex flex-col mb-4">
        <Label className="mt-14 mb-2">이메일</Label>
        <div className="flex flex-row justify-between">
          <Input
            onChange={(e) => {
              handleEmail(e);
            }}
            className="border-x border-y border-solid border-black w-400 h-10 outline-custom-orange"
          />
          <Button
            onClick={handleDupLogin}
            className="bg-black w-90 h-10 text-white"
          >
            중복확인
          </Button>
        </div>
      </div>
      <div className="mb-4">
        <Label className="mb-2">비밀번호</Label>
        <Input
          onChange={(e) => {
            handlePw(e);
          }}
          type="password"
          placeholder="영어, 숫자, 특수문자를 포함한 8~19자"
          className="border-x border-y border-solid border-black w-500 h-10 outline-custom-orange"
        />
      </div>
      <div className="mb-4">
        <Label className="mb-2">비밀번호 확인</Label>
        <Input
          onChange={(e) => {
            handlePwChk(e);
          }}
          type="password"
          className="border-x border-y border-solid border-black w-500 h-10 outline-custom-orange"
        />
      </div>
      <div className="mb-4">
        <Label className="mb-2">이름</Label>
        <Input
          onChange={(e) => {
            handleName(e);
          }}
          type="text"
          className="border-x border-y border-solid border-black w-500 h-10 outline-custom-orange"
        />
      </div>

      <div className="mb-4">
        <Label className="mb-2">전화번호</Label>
        <div className="flex flex-row justify-between items-center">
          <Input
            maxlength={3}
            onChange={handlePhone(0)}
            type="text"
            className="border-x border-y border-solid border-black w-150 h-10 outline-custom-orange"
          />
          <div>-</div>
          <Input
            maxlength={4}
            onChange={handlePhone(1)}
            type="text"
            className="border-x border-y border-solid border-black w-150 h-10 outline-custom-orange"
          />
          <div>-</div>
          <Input
            maxlength={4}
            onChange={handlePhone(2)}
            type="text"
            className="border-x border-y border-solid border-black w-150 h-10 outline-custom-orange"
          />
        </div>
      </div>
      <div className="mb-14">
        <Label className="mb-2">주소</Label>
        <div className="flex flex-col">
          <div className="flex flex-row justify-between mb-4">
            <Input
              type="text"
              placeholder="우편번호"
              className="border-x border-y border-solid border-black w-369 h-10  outline-none"
              value={address.zonecode}
              canEdit={true}
            />

            <Button
              className="w-121 h-10 bg-black text-white"
              onClick={clickPostCodeModal}
            >
              우편번호 찾기
            </Button>
            {showPostCodeModal && (
              <DaumPostcodeModal
                completeAddress={completeAddress}
                clickPostCodeModal={clickPostCodeModal}
              />
            )}
          </div>
          <Input
            type="text"
            placeholder="주소"
            className="border-x border-y border-solid border-black w-500 h-10 mb-4 outline-none"
            value={address.address}
            canEdit={true}
          />
          <Input
            onChange={handleArrDet}
            type="text"
            placeholder="상세주소"
            className="border-x border-y border-solid border-black w-500 h-10 outline-custom-orange"
          />
        </div>
      </div>
    </div>
  );
};

const InputLabel = {
  ...pretendardAuthLabelFontStyle,
};

export default SignupForm;
