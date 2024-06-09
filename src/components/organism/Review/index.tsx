'use client'
import Label from "@/components/atoms/Label";
import { useState } from "react";
import Button from "@/components/atoms/Button";

const Review = () => {
  const reviewList = [
    {
      reviewRating : "★★★★★",
      reviewContent : "향이 너무 제 스탈!",
    },
    {
      reviewRating : "★★★★☆",
      reviewContent : "향이 좋은나 가격이 ㅠ",
    },
    {
      reviewRating : "★★★★★",
      reviewContent : "너무 좋아요!!",
    },
    {
      reviewRating : "★★★★☆",
      reviewContent : "지속력이 약간 안좋았어요!",
    },
    {
      reviewRating : "★★★★★",
      reviewContent : "조말론보다 좋아요!!",
    },
    {
      reviewRating : "★★★★☆",
      reviewContent : "향이 너무 제 스탈!",
    },
    
  ]

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  // 현재 페이지에 해당하는 문의 리스트를 계산
  const currentItems = reviewList.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  // 총 페이지 수 계산
  const totalPages = Math.ceil(reviewList.length / itemsPerPage);

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
          </div>
        </div>
        {currentItems.map((value,index) => (
        <div key={index} className="flex flex-row border-l border-r border-b border-black h-20">
          <Label className="w-170 flex justify-center items-center">{value.reviewRating}</Label>
          <Label className="w-966 flex justify-center items-center">{value.reviewContent}</Label>
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
  
  export default Review;