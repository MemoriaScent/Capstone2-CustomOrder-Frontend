import ProductFilter from "@/components/molecule/ProductFilter";
import ProductItem from "@/components/molecule/ProductItem";
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

const ProductList: React.FC<ProductListProps> = ({ products }) => {
  return (
    <div>
      <ProductFilter></ProductFilter>
      <div className="flex flex-row pt-10">
        {products.map(
          (
            value: { id: number; Name: string; Price: number },
            index: number
          ): React.ReactNode => {
            return (
              <ProductItem
                key={index}
                id={value.id}
                name={value.Name}
                price={value.Price}
              ></ProductItem>
            );
          }
        )}
      </div>
    </div>
  );
};

export default ProductList;
