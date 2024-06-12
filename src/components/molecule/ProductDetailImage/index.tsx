import React from "react";

interface ProductDetailsProps {
  product: { id: number; Name: string; Image: string; Price: number };
}

const ProductDetailImage: React.FC<ProductDetailsProps> = ({ product }) => {
  return (
    <div>
      <img className="w-800 bg-white" src={product.Image}></img>
    </div>
  );
};

export default ProductDetailImage;
