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

  const themeObj = {
    // bgColor: "#ddd", //바탕 배경색
    searchBgColor: "#444444", //검색창 배경색
    // contentBgColor: "#FFFFFF", //본문 배경색(검색결과,결과없음,첫화면,검색서제스트)
    // pageBgColor: "#FFFFFF", //페이지 배경색
    textColor: "#444444", //기본 글자색
    queryTextColor: "#ffffff", //검색창 글자색
    postcodeTextColor: "#FF7A00", //우편번호 글자색
    // emphTextColor: "#FF7A00", //강조 글자색
    // outlineColor: "#FF7A00", //테두리
  };

  const postCodeStyle = {
    width: "400px",
    height: "600px",
    padding: "7px",
    borderRadius: "10px",
  };

  return (
    <Button
      onClick={clickPostCodeModal}
      className="fixed top-0 left-0 right-0 bottom-0 width-full height-full bg-black/40 flex justify-center items-center"
    >
      <div>
        <DaumPostcodeEmbed
          onComplete={completeHandler}
          theme={themeObj} //사용자정의 테마 객체 넘기기
          style={postCodeStyle}
        ></DaumPostcodeEmbed>
      </div>
    </Button>
  );
};

export default DaumPostcodeModal;
