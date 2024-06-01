"use client";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Address from "@/components/molecule/Address";
import Amount from "@/components/molecule/Amount";
import Items from "@/components/molecule/Items";
import PaySelect from "@/components/molecule/PaySelect";
import CheckoutPage from "@/components/pages/checkout";
import { useSearchParams } from "next/navigation";

import { useState } from "react";

const Payment = () => {
  const searchParams = useSearchParams();
  const item = [];
  if (searchParams.size > 0) {
    // 파라미터로 들어오는 데이터
    item.push({
      name: searchParams.get("name"),
      count: Number(searchParams.get("count")),
      price: Number(searchParams.get("price")),
    });
  } else {
    // 기본값(이전 작업에 따라 변경될 예정)
    item.push({ name: "Custom Diffuser", count: 1, price: 60000 });
    item.push({ name: "Signature Diffuser - forest", count: 1, price: 40000 });
    item.push({ name: "Signature Diffuser - woody", count: 1, price: 40000 });
  }
  // 구매 품목 총 금액
  let priceSum = 0;
  item.map((value) => (priceSum += value.price * value.count));
  let countSum = 0;
  item.map((value, index) => (countSum += value.count));
  const [count, setCount] = useState(countSum);
  const [price, setPrice] = useState(priceSum);
  const [delivery, setDelivery] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(price - delivery - discount);

  // 주소 기본값
  const [address, setAddress] = useState({
    zonecode: "47340",
    address: "부산 부산진구 엄광로 176",
    addressDetail: "산학협력관 412호",
  });

  // 다음 주소 코드
  const [showPostCodeModal, setShowPostCodeModal] = useState(false);
  const clickPostCodeModal = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();
    console.log(showPostCodeModal);
    setShowPostCodeModal(!showPostCodeModal);
  };
  const completeAddress = (zonecode: string, address: string) => {
    setAddress({ zonecode, address, addressDetail: "" });
    setShowPostCodeModal(!showPostCodeModal);
  };

  const [showPayMent, setShowPayMent] = useState(false);
  const clickPayMentModal = (event) => {
    event.preventDefault();
    setShowPayMent(false);
  };

  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-1136 mt-20">
        <div className="mb-70">
          <Items count={count} price={price}>
            {item.map((value, index) => {
              return (
                <div className="flex flex-row divide-x divide-black h-150">
                  <div className="w-150 p-2 flex items-center justify-center">
                    <img
                      src="/homeImage.png"
                      className="object-cover h-28"
                    ></img>
                  </div>
                  <div className="w-560 flex items-center px-12 pretendardNormalFont-20">
                    {value.name}
                  </div>
                  <div className="w-163 flex items-center justify-center pretendardNormalFont-20">
                    {value.count}
                  </div>
                  <div className="w-263 flex items-center justify-center pretendardNormalFont-20">
                    {(value.count * value.price).toLocaleString("ko-KR") + "원"}
                  </div>
                </div>
              );
            })}
          </Items>
        </div>
        <div className="mb-70">
          <Address
            zonecode={address.zonecode}
            address={address.address}
            addressDetail={address.addressDetail}
            showPostCodeModal={showPostCodeModal}
            clickPostCodeModal={clickPostCodeModal}
            completeAddress={completeAddress}
          ></Address>
        </div>
        <div className="flex flex-row justify-between mb-200">
          <Amount
            price={price}
            delivery={delivery}
            discount={discount}
            totalPrice={totalPrice}
          ></Amount>
          <div className="flex flex-col justify-between">
            <PaySelect>
              <div className="flex flex-row h-100 items-center p-10">
                <Input type="radio" name="toss"></Input>
                <div className="ml-8">토스페이먼츠</div>
              </div>
            </PaySelect>
            <Button
              className="w-535 h-50 bg-black text-white"
              onClick={(event) => {
                event.preventDefault();
                setShowPayMent(true);
              }}
            >
              주문 하기
            </Button>
            {showPayMent && (
              <CheckoutPage
                clickPayMentModal={clickPayMentModal}
                payPrice={totalPrice}
              ></CheckoutPage>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
