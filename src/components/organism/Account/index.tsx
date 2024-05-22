"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Label from "@/components/atoms/Label";
import AccountItem from "@/components/molecule/AccountItem";

const Account = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-200">
      <div className="border border-black divide-y divide-black">
        <AccountItem title="이메일">
          <Input className="border bg-custom-gray w-400 h-10"></Input>
          <Button className="bg-black ml-2.5 w-90 h-10 rounded-none text-white">
            중복확인
          </Button>
        </AccountItem>
        <AccountItem title="비밀번호">
          <Input className="border bg-custom-gray w-500 h-10"></Input>
        </AccountItem>
        <AccountItem title="비밀번호 확인">
          <Input className="border bg-custom-gray w-500 h-10"></Input>
        </AccountItem>
        <AccountItem title="이름">
          <Input className="border bg-custom-gray w-150 h-10"></Input>
        </AccountItem>
        <AccountItem title="전화번호">
          <div className="flex flex-row w-500 justify-between items-center">
            <Input className="border bg-custom-gray w-150 h-10"></Input>
            <div>-</div>
            <Input className="border bg-custom-gray w-150 h-10"></Input>
            <div>-</div>
            <Input className="border bg-custom-gray w-150 h-10"></Input>
          </div>
        </AccountItem>
        <AccountItem title="주소">
          <div className="flex flex-col">
            <div className="flex flex-row">
              <Label className="border bg-custom-gray w-369 h-10"></Label>
              <Button className="bg-black ml-2.5 w-121 h-10 rounded-none text-white">
                우편번호 찾기
              </Button>
            </div>
            <Label className="border bg-custom-gray w-500 h-10 my-2.5"></Label>
            <Input className="border bg-custom-gray w-500 h-10"></Input>
          </div>
        </AccountItem>
      </div>
      <div className="mt-20">
        <Button className="w-400 h-50 bg-black text-white border border-black rounded-none">
          회원 정보 수정하기
        </Button>
        <Button className="w-400 h-50 bg-white border border-black rounded-none">
          탈퇴하기
        </Button>
      </div>
    </div>
  );
};

export default Account;
