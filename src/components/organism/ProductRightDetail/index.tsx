import ProductOrder from "@/components/molecule/ProductOrder";
import ProductDetailsProps from "@/components/Types/productDetail";
import React from "react";

const ProductRightDetail: React.FC<ProductDetailsProps> = ({ params }) => {
  return (
    <div className=" right-20 w-720 flex flex-col px-60 pt-8">
      <div className="bg-white p-10">
        <ProductOrder params={params}></ProductOrder>
      </div>
    </div>
  );
};
export default ProductRightDetail;
