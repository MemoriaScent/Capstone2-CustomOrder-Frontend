import React, { useEffect, useRef, useState } from "react";
import {
  loadPaymentWidget,
  ANONYMOUS,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";

// 테스트키 사용(SDK에서 개인키 발급 시 사업자 필요)
const clientKey = "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm";

const generateRandomString = () =>
  window.btoa(Math.random().toString()).slice(0, 20);

interface CheckoutPageProps {
  clickPayMentModal: (event: any) => void;
  payPrice: number;
  orderName: string;
  customerName: string;
  customerEmail: string;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  clickPayMentModal,
  payPrice,
  orderName,
  customerName,
  customerEmail,
}) => {
  const customerKey = customerEmail ? customerEmail! : ANONYMOUS;

  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);
  const [price, setPrice] = useState<number>(payPrice);
  const agreementWidgetRef = useRef<any>(null);

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(clientKey, customerKey);

      if (paymentWidgetRef.current == null) {
        paymentWidgetRef.current = paymentWidget;
      }

      // 결제창을 렌더링합니다.
      const paymentMethodsWidget =
        paymentWidgetRef.current.renderPaymentMethods(
          "#payment-method",
          { value: price },
          { variantKey: "DEFAULT" }
        );

      // 약관을 렌더링합니다.
      agreementWidgetRef.current = paymentWidgetRef.current.renderAgreement(
        "#agreement",
        { variantKey: "DEFAULT" }
      );

      paymentMethodsWidgetRef.current = paymentMethodsWidget;
    })();
  }, []);

  return (
    <div
      className="fixed top-0 left-0 right-0 bottom-0 width-full height-full bg-black/40 flex justify-center items-center"
      onClick={clickPayMentModal}
    >
      <div className="z-10 flex flex-col items-center p-6 overflow-auto w-full h-full max-w-650 max-h-800 bg-white rounded-20">
        <div className="max-w-540 w-full">
          <div id="payment-method" className="w-full" />
          <div id="agreement" className="w-full" />
          <div className="p-6 w-full">
            <button
              className="py-2.5 px-5 rounded-lg text-xl cursor-pointer bg-toss-blue text-white max-w-540 w-full"
              onClick={async (event) => {
                event.stopPropagation();
                const paymentWidget = paymentWidgetRef.current;

                try {
                  // 결제 요청
                  await paymentWidget?.requestPayment({
                    orderId: generateRandomString(),
                    orderName,
                    customerName,
                    customerEmail,
                    successUrl:
                      window.location.origin +
                      "/payment/success" +
                      window.location.search,
                    failUrl:
                      window.location.origin +
                      "/payment/fail" +
                      window.location.search,
                  });
                } catch (error) {
                  // TODO: 에러 처리
                }
              }}
            >
              결제하기
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
