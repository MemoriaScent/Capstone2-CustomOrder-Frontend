import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import DaumPostcodeModal from "../DaumPostcodeModal";
import React from "react";

interface AddressProps {
  customerName: string;
  customerPhone: [string, string, string];
  zonecode: string;
  address: string;
  addressDetail: string;
  showPostCodeModal: boolean;
  clickPostCodeModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  completeAddress: (zonecode: string, address: string) => void;
}

const Address: React.FC<AddressProps> = ({
  customerName,
  customerPhone,
  zonecode,
  address,
  addressDetail,
  showPostCodeModal,
  clickPostCodeModal,
  completeAddress,
}) => {
  return (
    <div className="flex flex-col w-1136 border border-black divide-y divide-black">
      <div className="flex flex-row h-20 divide-x divide-black">
        <div className="flex items-center justify-center w-200 pretendardNormalFont-20">
          이름
        </div>
        <div className="w-936 p-5">
          <Input
            type="text"
            className="bg-custom-gray border border-custom-lightgray rounded-none w-150 h-10 pretendardNormalFont-16 outline-custom-orange"
            value={customerName}
          ></Input>
        </div>
      </div>
      <div className="flex flex-row h-20 divide-x divide-black">
        <div className="flex items-center justify-center w-200 pretendardNormalFont-20">
          전화번호
        </div>
        <div className="flex flex-row items-center w-936 p-5">
          <Input
            type="text"
            className="bg-custom-gray border border-custom-lightgray rounded-none w-150 h-10 pretendardNormalFont-16 outline-custom-orange"
            value={customerPhone[0]}
          ></Input>
          <div className="w-25 text-center pretendardNormalFont-16">-</div>
          <Input
            type="text"
            className="bg-custom-gray border border-custom-lightgray rounded-none w-150 h-10 pretendardNormalFont-16 outline-custom-orange"
            value={customerPhone[1]}
          ></Input>
          <div className="w-25 text-center pretendardNormalFont-16">-</div>
          <Input
            type="text"
            className="bg-custom-gray border border-custom-lightgray rounded-none w-150 h-10 pretendardNormalFont-16 outline-custom-orange"
            value={customerPhone[2]}
          ></Input>
        </div>
      </div>
      <div className="flex flex-row h-190 divide-x divide-black">
        <div className="flex items-center justify-center w-200 pretendardNormalFont-20">
          주소
        </div>
        <div className="flex flex-col justify-between w-936 pretendardNormalFont-20 p-5">
          <div className="flex flex-row items-center">
            <Input
              type="text"
              className="bg-custom-gray border border-custom-lightgray rounded-none w-369 h-10 pretendardNormalFont-16 mr-2.5 outline-none"
              value={zonecode}
              canEdit={true}
            ></Input>
            <Button
              className="w-121 h-10 my-0 text-white bg-black pretendardNormalFont-16"
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
            className="bg-custom-gray border border-custom-lightgray rounded-none w-500 h-10 pretendardNormalFont-16 outline-none"
            value={address}
            canEdit={true}
          ></Input>
          <Input
            type="text"
            className="bg-custom-gray border border-custom-lightgray rounded-none w-500 h-10 pretendardNormalFont-16 outline-custom-orange"
            value={addressDetail}
          ></Input>
        </div>
      </div>
      <div className="flex flex-row h-20 divide-x divide-black">
        <div className="flex items-center justify-center w-200 pretendardNormalFont-20">
          배송메시지
        </div>
        <div className="w-936 pretendardNormalFont-20 p-5">
          <Input
            type="text"
            className="bg-custom-gray border border-custom-lightgray rounded-none w-500 h-10 pretendardNormalFont-16 outline-custom-orange"
            placeholder="선택 사항"
          ></Input>
        </div>
      </div>
    </div>
  );
};

export default Address;
