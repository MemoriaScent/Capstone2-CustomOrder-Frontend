"use client";
import OrderInfo from "@/components/molecule/OrderInfo";
import OrderInfoBtn from "@/components/molecule/OrderInfoBtn";
import ProductInfo from "@/components/molecule/ProductInfo";

const OderDetails = () => {
  return (
    <div className="flex flex-col pt-20 pb-200 items-center">
      <ProductInfo></ProductInfo>
      <OrderInfo></OrderInfo>
      <OrderInfoBtn></OrderInfoBtn>
    </div>
  );
};

export default OderDetails;
