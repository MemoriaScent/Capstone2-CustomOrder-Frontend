"use client";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import useCart from "./useCart";

interface ProductDetailsProps {
  product: { id: number; Name: string; Image: string; Price: number };
}

const ProductOrder: React.FC<ProductDetailsProps> = ({ product }) => {
  const router = useRouter();
  const [count, setCount] = useState(1);
  console.log(product);
  const { addCart, addCartLocal } = useCart();
  return (
    <div className="flex flex-col">
      <Label className="pretendardSemiBoldFont-24">{product.Name}</Label>
      <Label className="pretendardNormalFont-20 mt-2">200ml</Label>
      <Label className="pretendardNormalFont-20 mt-10">
        {product.Price.toLocaleString("ko-KR") + "원"}
      </Label>
      <Label className="pretendardNormalFont-16 mt-10">수량</Label>
      <div className="flex flex-row items-center justify-between w-110 h-30 border border-black divide-x divide-black pretendardNormalFont-16 mt-2 p-0">
        <Button
          onClick={() => {
            if (count > 1) setCount(count - 1);
          }}
          className="w-10 rounded-none text-center"
        >
          -
        </Button>
        <Label className="w-full text-center">{count}</Label>
        <Button
          onClick={() => {
            if (count < 20) setCount(count + 1);
          }}
          className="w-10 rounded-none  text-center"
        >
          +
        </Button>
      </div>
      <div className="flex flex-col items-center mt-14">
        <div className="border-y border-black w-400"></div>
      </div>
      <div className="flex flex-row justify-between pretendardNormalFont-18 mt-8">
        <Label>주문 수량</Label>
        <Label>{count + "개"}</Label>
      </div>
      <div className="flex flex-row justify-between pretendardNormalFont-18 mt-4">
        <Label>총 주문 금액</Label>
        <Label>{(count * product.Price).toLocaleString("ko-KR") + "원"}</Label>
      </div>
      <div className="flex flex-col mt-8">
        <Button
          className="h-50 bg-custom-orange text-white rounded-none"
          onClick={(e) => {
            const buyItem = [
              {
                count,
                product: {
                  id: product.id,
                  Name: product.Name,
                  Price: product.Price,
                },
              },
            ];
            localStorage.setItem("selectedItems", JSON.stringify(buyItem));
            router.push(`/payment`);
          }}
        >
          구매하기
        </Button>
        <Button
          onClick={(e) => {
            addCartLocal(e, product, count);
            alert("장바구니에 담았습니다.");
          }}
          className="h-50 border border-black mt-5 rounded-none"
        >
          장바구니에 담기
        </Button>
      </div>
    </div>
  );
};

export default ProductOrder;
