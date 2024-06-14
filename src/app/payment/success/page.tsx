import PayMentSuccessPage from "@/components/pages/PayMentSuccessPage";
import { Suspense } from "react";

const PayMentSuccess = () => {
  return (
    <Suspense
      fallback={
        <div className="flex flex-col items-center justify-center mt-100">
          <img
            src="https://static.toss.im/lotties/loading-spot-apng.png"
            width="120"
            height="120"
          />
          <h2 className="title text-center">결제 요청까지 성공했어요.</h2>
        </div>
      }
    >
      <PayMentSuccessPage></PayMentSuccessPage>
    </Suspense>
  );
};

export default PayMentSuccess;
