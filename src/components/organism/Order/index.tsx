"use client";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import OrderItem from "@/components/molecule/OrderItem";

const orderItemList = [
  {
    orderNumber: "24051900001",
    name: "custom diffuser",
    count: 1,
    price: 70000,
    status: 0,
  },
  {
    orderNumber: "24051900002",
    name: "signature diffuser",
    count: 1,
    price: 40000,
    status: 1,
  },
  {
    orderNumber: "24051900003",
    name: "custom diffuser",
    count: 1,
    price: 70000,
    status: 2,
  },
  {
    orderNumber: "24051900004",
    name: "signature diffuser",
    count: 1,
    price: 40000,
    status: 3,
  },
  {
    orderNumber: "24051900005",
    name: "signature diffuser",
    count: 1,
    price: 40000,
    status: 4,
  },
];

const Order = () => {
  return (
    <div className="flex flex-col items-center pt-20 pb-200">
      <div className="w-1136 border border-black">
        <div className="flex flex-row divide-x divide-black h-20">
          <Label className="w-170 flex justify-center items-center">
            주문번호
          </Label>
          <Label className="w-244 flex justify-center items-center">
            상품 정보
          </Label>
          <Label className="w-155 flex justify-center items-center">수량</Label>
          <Label className="w-155 flex justify-center items-center">가격</Label>
          <Label className="w-194 flex justify-center items-center">
            주문 처리 상태
          </Label>
          <Label className="w-218 flex justify-center items-center">취소</Label>
        </div>
        <div>
          {orderItemList.map((value, index) => {
            return (
              <OrderItem
                key={index}
                orderNumber={value.orderNumber}
                name={value.name}
                count={value.count}
                price={value.price}
                status={value.status}
              ></OrderItem>
            );
          })}
        </div>
      </div>
      <div className="flex flex-row mt-9 h-4 w-2 items-center">
        <Button onClick={() => {}}>
          <div className="w-2 h-2 border-b border-l border-black rounded-none rotate-45"></div>
        </Button>
        <Label className="pretendardNormalFont-20">1</Label>
        <Button onClick={() => {}}>
          <div className="w-2 h-2 border-t border-r border-black rounded-none rotate-45"></div>
        </Button>
      </div>
    </div>
  );
};

export default Order;
