"use client";
import Button from "@/components/atoms/Button";

const ProductFilter = () => {
  return (
    <div className="flex flex-row pretendardNormalFont-20">
      <Button>All</Button>
      <div>|</div>
      <Button>Custom</Button>
      <div>|</div>
      <Button>Signature</Button>
    </div>
  );
};

export default ProductFilter;
