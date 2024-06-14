import ProductOrder from "@/components/molecule/ProductOrder";
import React from "react";

interface ProductDetailsProps {
  product: { id: number; Name: string; Image: string; Price: number };
}
const ProductRightDetail: React.FC<ProductDetailsProps> = ({ product }) => {
    return (
    <div className=" right-20 w-720 flex flex-col px-60 pt-8">
      <div className="bg-white p-10">
        <ProductOrder product={product}></ProductOrder>
      </div>
    </div>
  );
};
export default ProductRightDetail;
