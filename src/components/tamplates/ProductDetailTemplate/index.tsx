import ProductLeftDetail from "@/components/organism/ProductLeftDetail";
import ProductRightDetail from "@/components/organism/ProductRightDetail";
import ProductDetailsProps from "@/components/Types/productDetail";
import React from "react";

const ProductDetailTemplate: React.FC<ProductDetailsProps> = ({ params }) => {
  return (
    <div className="flex flex-row justify-center bg-black">
      <ProductLeftDetail params={params}></ProductLeftDetail>
      <ProductRightDetail params={params}></ProductRightDetail>
    </div>
  );
};

export default ProductDetailTemplate;
