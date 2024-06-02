'use client'
import Label from "@/components/atoms/Label";
import { useState } from "react";
import Button from "@/components/atoms/Button";

const Inquiry = () => {
  const inquiryList = [
    {
      inquiryCategory : "배송",
      inquiryContent : "배송이 완료되지 않았는데 배송 완료가 되었어요",
      answer : "Y"
    },
    {
      inquiryCategory : "결제",
      inquiryContent : "결제가 이상해요",
      answer : "Y"
    },
    {
      inquiryCategory : "배송",
      inquiryContent : "배송이 완료되지 않았는데 배송 완료가 되었어요",
      answer : "Y"
    },
    {
      inquiryCategory : "결제",
      inquiryContent : "결제가 이상해요",
      answer : "Y"
    },
    {
      inquiryCategory : "결제",
      inquiryContent : "결제가 이상해요",
      answer : "Y"
    },
    {
      inquiryCategory : "결제",
      inquiryContent : "결제가 이상해요",
      answer : "Y"
    },
  ]

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 현재 페이지에 해당하는 문의 리스트를 계산
  const currentItems = inquiryList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 총 페이지 수 계산
  const totalPages = Math.ceil(inquiryList.length / itemsPerPage);

  // 페이지 변경 함수
  const changePage = (page: number) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };
    
    return (
      <div className="flex flex-col items-center pt-20 pb-200">
        <div className="w-1136 border border-black">
          <div className="flex flex-row divide-x divide-black h-20 ">
            <Label className="w-170 flex justify-center items-center">문의 유형</Label>
            <Label className="w-772 flex justify-center items-center">문의 내용</Label>
            <Label className="w-194 flex justify-center items-center">답변</Label>
          </div>
        </div>
        {currentItems.map((value, index) => (
        <div key={index} className="flex flex-row border-l border-r border-b border-black h-20">
          <Label className="w-170 flex justify-center items-center">{value.inquiryCategory}</Label>
          <Label className="w-772 flex justify-center items-center">{value.inquiryContent}</Label>
          <Label className="w-194 flex justify-center items-center">{value.answer}</Label>
        </div>
      ))}
        <div className="flex justify-center mt-4">
        <button
          className="px-4 py-2 mx-1 border rounded"
          onClick={() => changePage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          &lt;
        </button>
        <span className="px-4 py-2 border rounded"> {currentPage} </span>
        <button
          className="px-4 py-2 mx-1 border rounded"
          onClick={() => changePage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          &gt;
        </button>
      </div>
        
      </div>
    );
  };
  
  export default Inquiry;