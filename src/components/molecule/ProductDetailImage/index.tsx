import ProductDetailsProps from "@/components/Types/productDetail";
import React from "react";

const ProductDetailImage: React.FC<ProductDetailsProps> = ({ params }) => {
  return (
    <div>
      <img
        className="w-800 bg-white"
        src={"/product/product_" + params.productId + ".png"}
      ></img>
    </div>
  );
};

export default ProductDetailImage;
