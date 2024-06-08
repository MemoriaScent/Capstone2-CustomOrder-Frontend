import ProductLeftDetail from "@/components/organism/ProductLeftDetail";
import ProductRightDetail from "@/components/organism/ProductRightDetail";
import ProductDetailsProps from "@/components/Types/productDetail";
import React from "react";

const getProductData = async () => {
  const response = await fetch("http://113.198.229.155:8001/deffuser");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

const ProductDetailTemplate: React.FC<ProductDetailsProps> = async ({
  params,
}) => {
  const products = await getProductData();

  let product;

  for (let i = 0; i < products.length; i++) {
    if (products[i].id == params.productId) {
      product = products[i];
    }
  }
  if (!product) return <h1>404 - Product Not Found</h1>;

  return (
    <div className="flex flex-row justify-center bg-black">
      <ProductLeftDetail product={product}></ProductLeftDetail>
      <ProductRightDetail product={product}></ProductRightDetail>
    </div>
  );
};

export default ProductDetailTemplate;
