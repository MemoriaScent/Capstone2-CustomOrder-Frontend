"use client";
import Address from "@/components/molecule/Address";
import Items from "@/components/molecule/Items";
import { useState } from "react";

const Payment = () => {
  // 기본값(이전 작업에 따라 변경될 예정)
  const item = [
    { name: "Custom Diffuser", count: 1, price: 60000 },
    { name: "Signature Diffuser - forest", count: 1, price: 40000 },
    { name: "Signature Diffuser - woody", count: 1, price: 40000 },
  ];
  // 구매 품목 총 금액
  let sum = 0;
  item.map((value) => (sum += value.price));

  const [count, setCount] = useState(item.length);
  const [price, setPrice] = useState(sum);

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
  return (
    <div>
      <div>
        <Items count={count} price={price}>
          {item.map((value, index) => {
            return (
              <div className="flex flex-row divide-x divide-black h-150">
                <div className="w-150 p-2 flex items-center justify-center">
                  <img src="/homeImage.png" className="object-cover h-28"></img>
                </div>
                <div className="w-560 flex items-center px-12 pretendardNormalFont-20">
                  {value.name}
                </div>
                <div className="w-163 flex items-center justify-center pretendardNormalFont-20">
                  {value.count}
                </div>
                <div className="w-263 flex items-center justify-center pretendardNormalFont-20">
                  {value.price.toLocaleString("ko-KR") + "원"}
                </div>
              </div>
            );
          })}
        </Items>
      </div>
      <div>
        <Address
          zonecode={address.zonecode}
          address={address.address}
          addressDetail={address.addressDetail}
          showPostCodeModal={showPostCodeModal}
          clickPostCodeModal={clickPostCodeModal}
          completeAddress={completeAddress}
        ></Address>
      </div>
      <div>
        <div>주문정보</div>
        <div>결제종류</div>
      </div>
    </div>
  );
};
export default Payment;
