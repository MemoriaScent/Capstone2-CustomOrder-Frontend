"use client";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import { useRouter, useSearchParams } from "next/navigation";

const PayMentCompletePage = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const payInfo = [];

  if (searchParams.size > 0) {
    payInfo.push({
      orderId: searchParams.get("orderId"),
    });
  } else {
    return <div>잘못된 접근입니다.</div>;
  }

  return (
    <div className="flex flex-col items-center my-150">
      <div className="flex flex-col items-center justify-between border border-black w-1000 h-470 pb-60 ">
        <img className="relative bottom-20" src="/PaySuccess.png"></img>
        <div className="flex flex-col items-center">
          <Label className="pretendardSemiBoldFont-24">
            주문이 완료되었습니다.
          </Label>
          <Label className="pretendardNormalFont-24">
            당신의 향기를 담아드릴게요
          </Label>
        </div>
        <Label className="pretendardNormalFont-24">
          주문번호 : {payInfo[0].orderId}
        </Label>
        <Button
          className="w-500 h-50 bg-black text-white pretendardSemiBoldFont-18"
          onClick={(event) => {
            event.stopPropagation();
            router.push("/");
          }}
        >
          메인 페이지로 이동
        </Button>
      </div>
    </div>
  );
};

export default PayMentCompletePage;
