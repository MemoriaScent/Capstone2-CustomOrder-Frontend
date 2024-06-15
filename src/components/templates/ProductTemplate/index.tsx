import ProductFilter from "@/components/molecule/ProductFilter";
import ProductList from "@/components/organism/ProductList";
import React from "react";

interface ProductListProps {
  products: {
    map(
      arg0: (
        value: { id: number; Name: string; Price: number },
        index: number
      ) => React.ReactNode
    ): React.ReactNode;
    id: number;
    Name: string;
    Price: number;
  };
}

const ProductTemplate: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div className="flex flex-col items-start">
      <ProductFilter></ProductFilter>
      <ProductList products={products}></ProductList>
    </div>
  );
};

export default ProductTemplate;
