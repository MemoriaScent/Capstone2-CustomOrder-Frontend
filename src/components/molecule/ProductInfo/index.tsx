import Label from "@/components/atoms/Label";
import Image from "next/image";

const ProductInfo = () => {
  return (
    <div className="w-1136 border border-black divide-y divide-black mb-20">
      <div className="flex flex-row h-60">
        <Label className="w-150 flex justify-center items-center">
          상품정보
        </Label>
        <div className="w-560"> </div>
        <Label className="w-163 flex justify-center items-center">수량</Label>
        <Label className="w-263 flex justify-center items-center">가격</Label>
      </div>
      <div className="flex flex-row h-150 divide-x divide-black">
        <div className="flex items-center justify-center p-5 w-150">
          {/* 수정 필요! */}
          <img width="60" height="auto" src="/HomeImage.png"></img>
        </div>

        <Label className="w-560 flex justify-start items-center px-10">
          custom diffuser
        </Label>
        <Label className="w-163 flex justify-center items-center">1</Label>
        <Label className="w-263 flex justify-center items-center">
          70,000원
        </Label>
      </div>
      <div className="flex flex-row h-60">
        <div className="w-150"> </div>
        <div className="w-560"> </div>
        <Label className="w-163 flex justify-center items-center">1</Label>
        <Label className="w-263 flex justify-center items-center">
          70,000원
        </Label>
      </div>
    </div>
  );
};

export default ProductInfo;
