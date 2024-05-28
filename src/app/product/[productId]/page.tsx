import ProductDetailPage from "@/components/pages/ProductDetailPage";
import ProductDetailsProps from "@/components/Types/productDetail";
import React from "react";

const ProductDetails: React.FC<ProductDetailsProps> = ({ params }) => {
  console.log(params);
  return (
    <div>
      <ProductDetailPage params={params}></ProductDetailPage>
    </div>
  );
};

export default ProductDetails;
