import ProductDetailImage from "@/components/molecule/ProductDetailImage";
import ProductReview from "@/components/molecule/ProductReview";
import React from "react";

interface ProductDetailsProps {
  product: { id: number; Name: string; Image: string; Price: number };
}

const ProductLeftDetail: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div className="flex flex-col">
      <ProductDetailImage product={product}></ProductDetailImage>
      <ProductReview></ProductReview>
    </div>
  );
};
export default ProductLeftDetail;
