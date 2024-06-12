import getProductData from "@/api/Product";
import ProductLeftDetail from "@/components/organism/ProductLeftDetail";
import ProductRightDetail from "@/components/organism/ProductRightDetail";
import ProductDetailsProps from "@/components/Types/productDetail";
import React from "react";

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
