'use client'
import Button from "@/components/atoms/Button";

const CartDetBtn = () => {
    const handleClick = () => {
        console.log("hi");
      };
  return (
    <div className="flex flex-row justify-center h-50">
      <Button className="bg-custom-orange text-white rounded-none w-500" onClick={handleClick}>
        전체 상품 주문하기
      </Button>
      <Button className="bg-white border border-black rounded-none w-318" onClick={handleClick}>
        선택 상품 주문하기
      </Button>
      <Button className="bg-black text-white rounded-none w-318" onClick={handleClick}>
        선택 상품 삭제하기
      </Button>
    </div>
  );
};

export default CartDetBtn;
