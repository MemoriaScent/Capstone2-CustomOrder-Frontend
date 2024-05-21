"use client";
import Footer from "@/components/organism/Footer";
import Header from "@/components/organism/Header";
import TextInputForm from "@/components/organism/TextInputForm";

const Props = {
  title: "취소하기",
  inputTitle: "취소 유형",
  placeholder: "취소 사유를 적어주세요",
  buttonTitle: "취소하기",
};

const OderCancelTamplate = () => {
  return (
    <div>
      <Header />
      <TextInputForm {...Props} onClick={() => {}} />
      <Footer />
    </div>
  );
};

export default OderCancelTamplate;
