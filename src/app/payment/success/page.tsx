import PayMentSuccessPage from "@/components/pages/PayMentSuccessPage";
import { Suspense } from "react";

const PayMentSuccess = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <PayMentSuccessPage></PayMentSuccessPage>
    </Suspense>
  );
};

export default PayMentSuccess;
