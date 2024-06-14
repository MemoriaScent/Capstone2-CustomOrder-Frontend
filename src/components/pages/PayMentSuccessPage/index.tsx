"use client";
import getPayments from "@/api/Payments";
import Button from "@/components/atoms/Button";
import Label from "@/components/atoms/Label";
import { useRouter, useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";

const PayMentSuccessPage = async () => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (searchParams.size > 0) {
        const paymentType = searchParams.get("paymentType");
        const orderId = searchParams.get("orderId");
        const paymentKey = searchParams.get("paymentKey");
        const amount = searchParams.get("amount");

        if (paymentType && orderId && paymentKey && amount) {
          try {
            const order = await getPayments(
              paymentType,
              orderId,
              paymentKey,
              Number(amount)
            );
            router.push("/payment/complete?orderId=" + orderId);

            if (order) {
              router.push("/payment/complete?orderId=" + orderId);
            } else {
              setLoading(false);
              // handle order failure, maybe show a message
            }
          } catch (error) {
            console.error("Error during the API call:", error);
            setLoading(false);
            // handle error, maybe show a message
          }
        } else {
          setLoading(false);
          // handle invalid query params
        }
      } else {
        setLoading(false);
        // handle no query params, maybe show a message
      }
    };

    fetchData();
  }, [searchParams, router]);

  return (
    <div className="flex flex-col items-center justify-center mt-100">
      <img
        src="https://static.toss.im/lotties/loading-spot-apng.png"
        width="120"
        height="120"
      />
      <h2 className="title text-center">결제 요청까지 성공했어요.</h2>
    </div>
  );
};

export default PayMentSuccessPage;
