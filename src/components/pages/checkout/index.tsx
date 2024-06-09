import React, {
  Dispatch,
  SetStateAction,
  useEffect,
  useRef,
  useState,
} from "react";
import {
  loadPaymentWidget,
  ANONYMOUS,
  PaymentWidgetInstance,
} from "@tosspayments/payment-widget-sdk";

const generateRandomString = () =>
  window.btoa(Math.random().toString()).slice(0, 20);

interface CheckoutPageProps {
  clickPayMentModal: (event: any) => void;
  payPrice: number;
}

const CheckoutPage: React.FC<CheckoutPageProps> = ({
  clickPayMentModal,
  payPrice,
}) => {
  const paymentWidgetRef = useRef<PaymentWidgetInstance | null>(null);
  const paymentMethodsWidgetRef = useRef<ReturnType<
    PaymentWidgetInstance["renderPaymentMethods"]
  > | null>(null);
  const agreementWidgetRef = useRef<any>(null);
  const [price, setPrice] = useState<number>(payPrice);

  useEffect(() => {
    (async () => {
      const paymentWidget = await loadPaymentWidget(
        "test_gck_docs_Ovk5rk1EwkEbP0W43n07xlzm",
        ANONYMOUS
      ); // 비회원 customerKey

      if (paymentWidgetRef.current == null) {
        paymentWidgetRef.current = paymentWidget;
      }

      /**
       * 결제창을 렌더링합니다.
       * @docs https://docs.tosspayments.com/reference/widget-sdk#renderpaymentmethods%EC%84%A0%ED%83%9D%EC%9E%90-%EA%B2%B0%EC%A0%9C-%EA%B8%88%EC%95%A1
       */
      const paymentMethodsWidget =
        paymentWidgetRef.current.renderPaymentMethods(
          "#payment-method",
          { value: price },
          { variantKey: "DEFAULT" }
        );

      /**
       * 약관을 렌더링합니다.
       * @docs https://docs.tosspayments.com/reference/widget-sdk#renderagreement%EC%84%A0%ED%83%9D%EC%9E%90-%EC%98%B5%EC%85%98
       */
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
                  /**
                   * 결제 요청
                   * @docs https://docs.tosspayments.com/reference/widget-sdk#requestpayment%EA%B2%B0%EC%A0%9C-%EC%A0%95%EB%B3%B4
                   */
                  await paymentWidget?.requestPayment({
                    orderId: generateRandomString(),
                    orderName: "토스 티셔츠 외 2건",
                    customerName: "김토스",
                    customerEmail: "customer123@gmail.com",
                    successUrl:
                      window.location.origin +
                      "/sandbox/success" +
                      window.location.search,
                    failUrl:
                      window.location.origin +
                      "/sandbox/fail" +
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
