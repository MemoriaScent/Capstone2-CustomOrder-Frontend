import React from "react";

interface AmountProps {
  price: number;
  delivery: number;
  discount: number;
  totalPrice: number;
}

const Amount: React.FC<AmountProps> = ({
  price,
  delivery,
  discount,
  totalPrice,
}) => {
  return (
    <div className="flex flex-col w-535 border border-black divide-y divide-black">
      <div className="flex flex-row h-100 divide-x divide-black">
        <div className="flex items-center justify-center w-135">상품 합계</div>
        <div className="flex items-center p-10 w-400">
          {price.toLocaleString("ko-KR") + "원"}
        </div>
      </div>
      <div className="flex flex-row h-100 divide-x divide-black">
        <div className="flex items-center justify-center w-135">배송비</div>
        <div className="flex items-center p-10 w-400">
          {delivery.toLocaleString("ko-KR") + "원"}
        </div>
      </div>
      <div className="flex flex-row h-100 divide-x divide-black">
        <div className="flex items-center justify-center w-135">할인 금액</div>
        <div className="flex items-center p-10 w-400">
          {discount.toLocaleString("ko-KR") + "원"}
        </div>
      </div>
      <div className="flex flex-row h-100 divide-x divide-black">
        <div className="flex items-center justify-center w-135">결제 금액</div>
        <div className="flex items-center p-10 w-400">
          {totalPrice.toLocaleString("ko-KR") + "원"}
        </div>
      </div>
    </div>
  );
};

export default Amount;
