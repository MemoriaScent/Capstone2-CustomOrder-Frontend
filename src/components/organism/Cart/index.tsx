"use client";
import Label from "@/components/atoms/Label";
import Image from "next/image";
import Input from "@/components/atoms/Input";
import { useState, useEffect } from "react";
import Button from "@/components/atoms/Button";
interface Product {
  id: number;
  Name: string;
  Image: string;
  Price: number;
}

interface CartItem {
  product: Product;
  count: number;
}

const CartInfo = () => {
  const handleClick = () => {
    console.log("test");
  };
  const [cartItems, setCartItems] = useState<CartItem[]>([]);
  const [checkedItems, setCheckedItems] = useState<{ [key: number]: boolean }>({});
  const [allChecked, setAllChecked] = useState(true);

  useEffect(() => {
    // 로컬스토리지에서 장바구니 데이터를 가져옴
    const storedCart = localStorage.getItem("cart");
    if (storedCart) {
      const parsedCart = JSON.parse(storedCart);
      setCartItems(parsedCart);

      // 모든 항목을 기본적으로 체크된 상태로 설정
      const initialCheckedItems: { [key: number]: boolean } = {};
      parsedCart.forEach((item: CartItem) => {
        initialCheckedItems[item.product.id] = true;
      });
      setCheckedItems(initialCheckedItems);
    }
  }, []);
  const handleSaveSelectedItems = () => {
    const selectedItems = cartItems.filter(item => checkedItems[item.product.id]);
    localStorage.setItem("selectedItems", JSON.stringify(selectedItems));
    alert('선택된 상품이 저장되었습니다.');
  };

  const handleCheckboxChange = (productId: number) => {
    setCheckedItems((prevState) => ({
      ...prevState,
      [productId]: !prevState[productId],
    }));
  };

  const handleAllCheckboxChange = () => {
    const newAllChecked = !allChecked;
    setAllChecked(newAllChecked);

    const newCheckedItems = cartItems.reduce((acc, item) => {
      acc[item.product.id] = newAllChecked;
      return acc;
    }, {} as { [key: number]: boolean });

    setCheckedItems(newCheckedItems);
  };

  const totalCount = cartItems.reduce((total, item) => {
    return checkedItems[item.product.id] ? total + item.count : total;
  }, 0);

  const totalPrice = cartItems
    .reduce((total, item) => {
      return checkedItems[item.product.id]
        ? total + item.product.Price * item.count
        : total;
    }, 0)
    .toLocaleString("ko-KR");

  return (
    <div className="w-1136 border border-black divide-y divide-black mb-20">
      <div className="flex flex-row h-60 ">
        <div className="p-5">
          <Input
            type="checkbox"
            className="custom-checkbox"
            checked={allChecked}
            onChange={handleAllCheckboxChange}
          ></Input>
        </div>
        <Label className="w-150 flex justify-center items-center">상품정보</Label>
        <div className="w-560"> </div>
        <Label className="w-163 flex justify-center items-center">수량</Label>
        <Label className="w-263 flex justify-center items-center">가격</Label>
      </div>
      {cartItems.map((cartItem, index) => (
        <div key={index} className="flex flex-row h-150 divide-x divide-black">
          <div className="flex items-center justify-center p-5 w-50">
            <Input
              type="checkbox"
              className="custom-checkbox"
              checked={checkedItems[cartItem.product.id] || false}
              onChange={() => handleCheckboxChange(cartItem.product.id)}
            ></Input>
          </div>
          <div className="flex items-center justify-center p-5 w-150">
            <img width="60" height="auto" src={cartItem.product.Image}></img>
          </div>
          <Label className="w-560 flex justify-start items-center px-10">
            {cartItem.product.Name}
          </Label>
          <Label className="w-163 flex justify-center items-center">
            {cartItem.count}
          </Label>
          <Label className="w-263 flex justify-center items-center">
            {cartItem.product.Price.toLocaleString("ko-KR")}원
          </Label>
        </div>
      ))}
      <div className="flex flex-row h-60">
        <div style={{ width: "190px" }} className=""> </div>
        <div className="w-560"> </div>
        <Label className="w-163 flex justify-center items-center">총 수량</Label>
        <Label className="w-263 flex justify-center items-center">
          {totalCount}개
        </Label>
      </div>
      <div className="flex flex-row h-60">
        <div style={{ width: "190px" }} className=""> </div>
        <div className="w-560"> </div>
        <Label className="w-163 flex justify-center items-center">총 가격</Label>
        <Label className="w-263 flex justify-center items-center">
          {totalPrice}원
        </Label>
      </div>
      <div className="flex flex-row justify-center h-50 mb-105 mt-105">
      <Button className="bg-custom-orange text-white rounded-none w-500" onClick={handleClick}>
        전체 상품 주문하기
      </Button>
      <Button className="bg-white border border-black rounded-none w-318" onClick={handleSaveSelectedItems}>
        선택 상품 주문하기
      </Button>
      <Button className="bg-black text-white rounded-none w-318" onClick={handleClick}>
        선택 상품 삭제하기
      </Button>
    </div>
    </div>
    
  );
};

export default CartInfo;
