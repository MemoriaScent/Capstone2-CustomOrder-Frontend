import ProductDetailTemplate from "@/components/templates/ProductDetailTemplate";
import ProductDetailsProps from "@/components/Types/productDetail";
import React from "react";

const ProductDetailPage: React.FC<ProductDetailsProps> = ({ params }) => {
  return (
    <div>
      <ProductDetailTemplate params={params}></ProductDetailTemplate>
    </div>
  );
};

export default ProductDetailPage;
