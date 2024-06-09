import Button from "@/components/atoms/Button";

const OrderInfoBtn = () => {
  return (
    <div className="flex flex-row justify-center h-50">
      <Button
        onClick={() => {}}
        className="bg-custom-orange text-white rounded-none w-500"
      >
        리뷰 작성하기
      </Button>
      <Button
        onClick={() => {}}
        className="bg-white border border-black rounded-none w-318"
      >
        문의하기
      </Button>
      <Button
        onClick={() => {}}
        className="bg-black text-white rounded-none w-318"
      >
        취소하기
      </Button>
    </div>
  );
};

export default OrderInfoBtn;
