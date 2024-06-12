import Payment from "@/components/organism/Payment";
import { Suspense } from "react";

const PayMentTemplate = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Payment></Payment>
    </Suspense>
  );
};

export default PayMentTemplate;
