"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import AccountItem from "@/components/molecule/AccountItem";
import { useEffect } from "react";
import { useAtom } from "jotai";
import { signupAtom } from "@/components/molecule/SignupForm/JAtom";
import useAccount from "./useAccount";
import { useState } from "react";
import DaumPostcodeModal from "@/components/molecule/DaumPostcodeModal";
const Account = () => {
  const {
    handleDupLogin,
        handleEmail,
        handlePw,
        handlePwChk,
        handleName,
        handlePhone,
        handleArrDet,
        handleClick,
        handleclick,
        fetchAccountData
  } = useAccount()

  const [signup,setSignup] = useAtom(signupAtom)
  const [phoneParts, setPhoneParts] = useState(["", "", ""]);


  useEffect(()=>{  // 데이터 가져오기
    fetchAccountData()
  },[])

  useEffect(() => {
    if (signup.phone && signup.phone.length === 11) {
      setPhoneParts([
        signup.phone.slice(0, 3),
        signup.phone.slice(3, 7),
        signup.phone.slice(7, 11),
      ]);
    }
  }, [signup.phone]);
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

  
  return (
    <div className="flex flex-col items-center pt-20 pb-200">
      <div className="border border-black divide-y divide-black">
        <AccountItem title="이메일">
        <Input 
            className="border bg-custom-gray w-400 h-10"
            value={signup.email}
            onChange={(e)=>{
              handleEmail(e)
            }}
          />
          <Button
            onClick={handleDupLogin}
            className="bg-black ml-2.5 w-90 h-10 rounded-none text-white"
          >
            중복확인
          </Button>
        </AccountItem>
        <AccountItem title="비밀번호">
          <Input className="border bg-custom-gray w-500 h-10"
          value={signup.pw}
          onChange={(e)=>{handlePw(e)}}></Input>
        </AccountItem>
        <AccountItem title="비밀번호 확인">
          <Input 
          onChange={(e)=>{handlePwChk(e)}}
          className="border bg-custom-gray w-500 h-10"></Input>
        </AccountItem>
        <AccountItem title="이름">
          <Input 
          value={signup.name}
          onChange={(e)=>{handleName(e)}}
          className="border bg-custom-gray w-150 h-10"></Input>
        </AccountItem>
        <AccountItem title="전화번호">
          <div className="flex flex-row w-500 justify-between items-center">
          <Input
            onChange={handlePhone(0)}
            type="text"
            className="border-x border-y border-solid border-black w-150 h-10 outline-custom-orange"
        />
            <div>-</div>
            <Input
            onChange={handlePhone(1)}
            type="text"
            className="border-x border-y border-solid border-black w-150 h-10 outline-custom-orange"
        />
            <div>-</div>
            <Input
          
            onChange={handlePhone(2)} 
            className="border bg-custom-gray w-150 h-10"></Input>
          </div>
        </AccountItem>
        <AccountItem title="주소">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Input
              value={signup.location.zonecode}
              className="border bg-custom-gray w-369 h-10"></Input>
              <Button
                onClick={clickPostCodeModal}
                className="bg-black ml-2.5 w-121 h-10 rounded-none text-white"
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
            <Input className="border bg-custom-gray w-500 h-10 my-2.5"
            value={signup.location.address}
            canEdit={true}
            ></Input>
            <Input 
            value={signup.location.addrDet}
            onChange={handleArrDet}
            type="text"
            className="border bg-custom-gray w-500 h-10"></Input>
          </div>
        </AccountItem>
      </div>
      <div className="mt-20">
        <Button
          onClick={handleClick}
          className="w-400 h-50 bg-black text-white border border-black rounded-none"
        >
          회원 정보 수정하기
        </Button>
        <Button
          onClick={handleclick}
          className="w-400 h-50 bg-white border border-black rounded-none"
        >
          탈퇴하기
        </Button>
      </div>
    </div>
  );
};

export default Account;
