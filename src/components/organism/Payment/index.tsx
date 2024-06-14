"use client";
import getAccountData from "@/api/UserInfo";
import Button from "@/components/atoms/Button";
import Input from "@/components/atoms/Input";
import Address from "@/components/molecule/Address";
import Amount from "@/components/molecule/Amount";
import Items from "@/components/molecule/Items";
import PaySelect from "@/components/molecule/PaySelect";
import CheckoutPage from "@/components/pages/checkout";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";

const Payment = () => {
  const [first, setfirst] = useState(true);
  const [orderItem, setOrderItem] = useState<
    [{ name: string; count: number; price: number }]
  >([{ name: "", count: 1, price: 1 }]);

  // 주소 기본값(사용자 정보 조회해서 제공)
  const [address, setAddress] = useState({
    zonecode: "47340",
    address: "부산 부산진구 엄광로 176",
    addressDetail: "산학협력관 412호",
  });

  const [orderName, setOrderName] = useState<string>();
  const [customerName, setCustomerName] = useState<string>();
  const [customerEmail, setCustomerEmail] = useState<string>();
  const [customerPhone, setCustomerPhone] =
    useState<[string, string, string]>();

  const [count, setCount] = useState(0);
  const [price, setPrice] = useState(0);
  const [delivery, setDelivery] = useState(0);
  const [discount, setDiscount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      // 사용자 정보 조회
      const data = await getAccountData();
      // 장바구니 조회
      const response = localStorage.getItem("selectedItems");
      let selectedItems;
      if (response) selectedItems = JSON.parse(response);

      // customer Info 추가
      if (data && selectedItems) {
        // 주문자 정보 추가
        setOrderName(
          `${selectedItems[0].product.Name}${
            selectedItems.length > 1
              ? "외" + (selectedItems.length - 1) + "개"
              : ""
          }`
        );
        setCustomerName(data.name.toString());
        setCustomerEmail(data.email.toString());
        const phone = data.phone;
        setCustomerPhone([
          phone.substring(0, 3),
          phone.substring(3, 7),
          phone.substring(7, 11),
        ]);
        // console.log(data);
        // console.log(selectedItems);

        // 주문 주소 추가
        const addressData = JSON.parse(data.location);
        if (addressData)
          setAddress({
            zonecode: addressData.zonecode,
            address: addressData.address,
            addressDetail: addressData.addrDet,
          });
        else {
          setAddress({
            zonecode: "",
            address: "",
            addressDetail: "",
          });
        }
        // 제품 정보 가공 name, cont, price로
        const item: any = [];
        selectedItems.map(
          (
            value: {
              count: number;
              product: { id: number; Name: string; Price: number };
            },
            index: number
          ) => {
            console.log(index);
            item.push({
              name: value.product.Name,
              count: value.count,
              price: value.product.Price,
            });
          }
        );

        // 주문 금액 가공 sum, delivery, discount, total
        if (item) {
          let priceSum = 0;
          let countSum = 0;
          item.map(
            (
              value: { count: number; name: string; price: number },
              index: number
            ) => {
              priceSum += value.price * value.count;
              countSum += value.count;
            }
          );
          setCount(countSum);
          setPrice(priceSum);
          setTotalPrice(priceSum - delivery - discount);
          setOrderItem(item);
        }
      }
    };

    fetchData();
  }, [first]);

  console.log(orderName);

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
  const clickPayMentModal = (event: React.MouseEvent) => {
    event.preventDefault();
    setShowPayMent(false);
  };

  console.log(orderItem);

  // 주문자 정보 중 이상이 있을 경우 처리
  if (
    !orderItem ||
    !orderName ||
    !customerName ||
    !customerEmail ||
    !customerPhone?.length
  ) {
    return <div>잘못된 접근입니다.</div>;
  }
  return (
    <div className="flex justify-center">
      <div className="flex flex-col w-1136 mt-20">
        <div className="mb-70">
          <Items count={count} price={price}>
            {orderItem.map((value, index) => {
              return (
                <div
                  key={index}
                  className="flex flex-row divide-x divide-black h-150"
                >
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
            customerName={customerName}
            customerPhone={customerPhone}
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
                <Input type="radio" name="toss" checked></Input>
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
              <Suspense fallback={<div>Loading...</div>}>
                <CheckoutPage
                  clickPayMentModal={clickPayMentModal}
                  payPrice={totalPrice}
                  orderName={orderName}
                  customerName={customerName}
                  customerEmail={customerEmail}
                ></CheckoutPage>
              </Suspense>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Payment;
