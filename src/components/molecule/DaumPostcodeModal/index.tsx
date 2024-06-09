import Button from "@/components/atoms/Button";
import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

interface DaumPostcodeModalProps {
  clickPostCodeModal: (event: React.MouseEvent<HTMLButtonElement>) => void;
  completeAddress: (zonecode: string, address: string) => void;
}

const DaumPostcodeModal: React.FC<DaumPostcodeModalProps> = ({
  clickPostCodeModal,
  completeAddress,
}) => {
  const completeHandler = (data: any) => {
    const zonecode = data.zonecode;
    const address = data.address;
    completeAddress(zonecode, address);
    console.log(zonecode);
    console.log(address);
  };
  return (
    <Button
      onClick={clickPostCodeModal}
      className="fixed top-0 left-0 right-0 bottom-0 width-full height-full bg-black/40 flex justify-center items-center"
    >
      <div>
        <DaumPostcodeEmbed onComplete={completeHandler}></DaumPostcodeEmbed>
      </div>
    </Button>
  );
};

export default DaumPostcodeModal;
