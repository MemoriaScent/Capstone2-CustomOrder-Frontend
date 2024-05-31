import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

interface DaumPostcodeModalProps {
  clickPostCodeModal: () => void;
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
    <div
      onClick={clickPostCodeModal}
      className="fixed top-0 left-0 right-0 bottom-0 width-full height-full bg-black/40 flex justify-center items-center"
    >
      <div>
        <DaumPostcodeEmbed onComplete={completeHandler}></DaumPostcodeEmbed>
      </div>
    </div>
  );
};

export default DaumPostcodeModal;
