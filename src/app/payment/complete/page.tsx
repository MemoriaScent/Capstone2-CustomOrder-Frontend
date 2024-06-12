import PayMentCompletePage from "@/components/pages/PayMentCompletePage";
import { Suspense } from "react";

const PaymentComplete = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PayMentCompletePage></PayMentCompletePage>
    </Suspense>
  );
};

export default PaymentComplete;
