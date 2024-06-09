"use client";

import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import { useState } from "react";
import ReviewItem from "../ReviewItem";

const ProductReview = () => {
  const [review, setReview] = useState([
    { id: 0, title: "리뷰 제목1", content: "리뷰 내용1", score: 5 },
    { id: 1, title: "리뷰 제목2", content: "리뷰 내용2", score: 3 },
    { id: 2, title: "리뷰 제목3", content: "리뷰 내용3", score: 4 },
    // { id: 3, title: "리뷰 제목4", content: "리뷰 내용4", score: 2 },
    // { id: 4, title: "리뷰 제목5", content: "리뷰 내용5", score: 5 },
  ]);
  const [index, setIndex] = useState(1);
  const [page, setPage] = useState(0);
  const maxIndex = review.length;
  return (
    <div className="p-100 w-800 text-white ">
      <Label className="text-center pretendardNormalFont-24 mb-10">
        Review
      </Label>
      <div className="border-t border-white">
        {review.map((item, index) => {
          return <ReviewItem key={index} {...item}></ReviewItem>;
        })}
      </div>
      <div className="flex flex-row justify-center mt-50 pretendardNormalFont-20">
        <Button onClick={() => {}}>{"<"}</Button>
        <Label>{index}</Label>
        <Button onClick={() => {}}>{">"}</Button>
      </div>
    </div>
  );
};

export default ProductReview;
