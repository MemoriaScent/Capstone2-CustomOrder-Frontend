import Label from "@/components/atoms/Label";
import React from "react";

interface ReviewItem {
  key?: number;
  id: number;
  title: string;
  content: string;
  score: number;
}

const ReviewItem: React.FC<ReviewItem> = ({
  id,
  title,
  content,
  score,
  key,
}) => {
  let reviewScore = "";
  for (let i = 0; i < score; i++) reviewScore += "★";

  return (
    <div
      id={id.toString()}
      className="flex flex-col border-b border-white h-160 p-25"
    >
      <Label className="pretendardSemiBoldFont-20 mb-2">{title}</Label>
      <Label className="h-full pretendardNormalFont-18">{content}</Label>
      <Label className="pretendardNormalFont-18">{reviewScore}</Label>
    </div>
  );
};
export default ReviewItem;
