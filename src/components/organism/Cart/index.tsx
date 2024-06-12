"use client";
import Label from "@/components/atoms/Label";
import Image from "next/image";
import Input from "@/components/atoms/Input";
import { useState } from "react";

const CartInfo = () => {
  const [cartItem, setCartItem] = useState([
    { id: 1, name: "custom diffuser", quantity: 1, price: 60000 },
    { id: 2, name: "custom diffuser", quantity: 1, price: 60000 },
    { id: 3, name: "signature diffuser", quantity: 1, price: 40000 },
  ]);

  return (
    <div className="w-1136 border border-black divide-y divide-black mb-20">
      <div className="flex flex-row h-60 ">
        <div className="p-5">
          <Input type="checkbox" className="custom-checkbox"></Input>
        </div>
        <Label className="w-150 flex justify-center items-center">
          상품정보
        </Label>
        <div className="w-560"> </div>
        <Label className="w-163 flex justify-center items-center">수량</Label>
        <Label className="w-263 flex justify-center items-center">가격</Label>
      </div>
      {cartItem.map((cartItem, index) => (
        <div key={index} className="flex flex-row h-150 divide-x divide-black">
          <div className="flex items-center justify-center p-5 w-50">
            <Input type="checkbox" className="custom-checkbox"></Input>
          </div>
          <div className="flex items-center justify-center p-5 w-150">
            <img width="60" height="auto" src="/HomeImage.png"></img>
          </div>
          <Label className="w-560 flex justify-start items-center px-10">
            {cartItem.name}
          </Label>
          <Label className="w-163 flex justify-center items-center">
            {cartItem.quantity}
          </Label>
          <Label className="w-263 flex justify-center items-center">
            {cartItem.price}
          </Label>
        </div>
      ))}

      <div className="flex flex-row h-60">
        <div style={{ width: "190px" }} className="">
          {" "}
        </div>
        <div className="w-560"> </div>
        <Label className="w-163 flex justify-center items-center">1</Label>
        <Label className="w-263 flex justify-center items-center">
          70,000원
        </Label>
      </div>
    </div>
  );
};

export default CartInfo;
