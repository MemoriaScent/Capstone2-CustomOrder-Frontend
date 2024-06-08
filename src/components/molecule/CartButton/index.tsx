import Button from "@/components/atoms/Button";
import { BasePorps } from "@/components/Types";
import { orangeColorStyle } from "@/styles/color";
import { useRouter } from "next/navigation";
import React from "react";

const CartButton: React.FC<BasePorps> = ({ children, css, className }) => {
  const router = useRouter();
  return (
    <div style={{ ...CartButtonStyle, ...orangeColorStyle }}>
      <Button
        onClick={(event) => {
          event.stopPropagation;
          router.push("/cart");
        }}
        className={"flex justify-center items-center w-full h-full"}
      >
        cart
      </Button>
    </div>
  );
};

const CartButtonStyle = {
  padding: "0",
  width: "120px",
  height: "30px",
  clipPath: "ellipse(60px 15px)",
};

export default CartButton;
