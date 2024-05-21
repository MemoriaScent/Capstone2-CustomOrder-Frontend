import Label from "@/components/atoms/Label";

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
        <image className="w-150"></image>
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
