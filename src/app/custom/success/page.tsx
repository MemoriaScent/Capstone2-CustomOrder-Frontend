import CustomSuccessPage from "@/components/pages/CustomSuccessPage";
import { Suspense } from "react";

const Complete = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <CustomSuccessPage></CustomSuccessPage>
    </Suspense>
  );
};

export default Complete;
