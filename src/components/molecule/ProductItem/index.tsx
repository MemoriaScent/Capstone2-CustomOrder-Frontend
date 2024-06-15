"use client";
import Box from "@/components/atoms/Box";
import Button from "@/components/atoms/Button";
import Image from "@/components/atoms/Image";
import Label from "@/components/atoms/Label";
import { useRouter } from "next/navigation";
import React from "react";

interface ProductItemProps {
  key: number;
  id: number;
  name: string;
  price: number;
}

const ProductItem: React.FC<ProductItemProps> = ({ id, name, price }) => {
  const router = useRouter();

  console.log(id);
  console.log(name);
  console.log(price);

  return (
    <Button
      className="w-250 h-370 flex flex-col items-start p-5 justify-between mr-10"
      onClick={() => {
        router.push(`/product/${id}`);
      }}
    >
      <Image src={`/product/product_${id}_1.png`}></Image>
      <Box>
        <Label className="w-230 pretendardSemiBoldFont-20 text-start truncate hover:text-clip">
          {name}
        </Label>
        <Label className="pretendardNormalFont-20 text-start">
          {price.toLocaleString("ko-KR") + "원"}
        </Label>
      </Box>
    </Button>
  );
};

export default ProductItem;
