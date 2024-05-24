"use client";
import OderInfo from "@/components/molecule/OrderInfo";
import OderInfoBtn from "@/components/molecule/OrderInfoBtn";
import ProductInfo from "@/components/molecule/ProductInfo";

const OderDetails = () => {
  return (
    <div className="flex flex-col pt-20 pb-200 items-center">
      <ProductInfo></ProductInfo>
      <OderInfo></OderInfo>
      <OderInfoBtn></OderInfoBtn>
    </div>
  );
};

export default OderDetails;
