"use client";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import ProductDetailsProps from "@/components/Types/productDetail";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const ProductOrder: React.FC<ProductDetailsProps> = ({ params }) => {
  const router = useRouter();
  // 상품 조회 정보?
  const productId = Number(params.productId);
  const [count, setCount] = useState(1);
  const Product = [
    {
      name: "Signature Diffuser - forest",
      volume: 200,
      price: 40000,
    },
    {
      name: "Signature Diffuser - cotton candy",
      volume: 200,
      price: 40000,
    },
    {
      name: "Signature Diffuser - marine",
      volume: 200,
      price: 40000,
    },
  ];
  return (
    <div className="flex flex-col">
      <Label className="pretendardSemiBoldFont-24">
        {Product[productId].name}
      </Label>
      <Label className="pretendardNormalFont-20 mt-2">
        {Product[productId].volume + "ml"}
      </Label>
      <Label className="pretendardNormalFont-20 mt-10">
        {Product[productId].price.toLocaleString("ko-KR") + "원"}
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
        <Label>
          {(count * Product[productId].price).toLocaleString("ko-KR") + "원"}
        </Label>
      </div>
      <div className="flex flex-col mt-8">
        <Button
          className="h-50 bg-custom-orange text-white rounded-none"
          onClick={() => {
            router.push(
              `/payment?name=${Product[productId].name}&count=${count}&price=${Product[productId].price}`
            );
          }}
        >
          구매하기
        </Button>
        <Button className="h-50 border border-black mt-5 rounded-none">
          장바구니에 담기
        </Button>
      </div>
    </div>
  );
};

export default ProductOrder;
