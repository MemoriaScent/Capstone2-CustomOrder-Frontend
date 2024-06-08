"use client";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import { useRouter } from "next/navigation";
import React from "react";

interface ProductItemProps {
  id: Number;
  name: String;
  price: Number;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, name, price }) => {
  const router = useRouter();
  return (
    <Button
      className="w-250 h-370 flex flex-col items-start p-5 justify-between mr-10"
      onClick={() => {
        router.push(`/product/${id}`);
      }}
    >
      <img src={`/product/product_${id}_${1}.png`}></img>
      <div>
        <Label className="w-230 pretendardSemiBoldFont-20 text-start truncate hover:text-clip">
          {name}
        </Label>
        <Label className="pretendardNormalFont-20 text-start">
          {price.toLocaleString("ko-KR") + "원"}
        </Label>
      </div>
    </Button>
  );
};

export default ProductItem;
