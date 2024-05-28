import ProductDetailImage from "@/components/molecule/ProductDetailImage";
import ProductReview from "@/components/molecule/ProductReview";
import ProductDetailsProps from "@/components/Types/productDetail";
import React from "react";

const ProductLeftDetail: React.FC<ProductDetailsProps> = ({ params }) => {
  return (
    <div className="flex flex-col">
      <ProductDetailImage params={params}></ProductDetailImage>
      <ProductReview></ProductReview>
    </div>
  );
};
export default ProductLeftDetail;
