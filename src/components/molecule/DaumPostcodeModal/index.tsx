import React from "react";
import DaumPostcodeEmbed from "react-daum-postcode";

interface DaumPostcodeModalProps {
  clickPostCodeModal: () => void;
}

const DaumPostcodeModal: React.FC<DaumPostcodeModalProps> = ({
  clickPostCodeModal,
}) => {
  return (
    <div
      onClick={clickPostCodeModal}
      className="fixed top-0 left-0 right-0 bottom-0 width-full height-full bg-black/40 flex justify-center items-center"
    >
      <div>
        <DaumPostcodeEmbed></DaumPostcodeEmbed>
      </div>
    </div>
  );
};

export default DaumPostcodeModal;
