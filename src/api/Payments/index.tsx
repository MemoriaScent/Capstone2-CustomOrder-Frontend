import axios from "axios";

require("dotenv").config();

const getPayments = async (
  paymentType: string | null,
  orderId: string | null,
  paymentKey: string | null,
  amount: number | null,
  authorization: string | null
) => {
  const data = {
    orderId,
    paymentType,
    paymentKey,
    amount,
  };
  console.log(data);
  console.log(authorization);
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}:${process.env.NEXT_PUBLIC_API_SERVER_PORT}/toss`,
      data,
      {
        headers: {
          "Content-Type": "application/json",
          id: 1,
          Authorization: `Bearer ${authorization}`,
        },
      }
    );
    console.log(response.data);
    return orderId;
  } catch (error) {
    console.error("Error during the API call:", error);
    if (axios.isAxiosError(error)) {
      console.error("Axios error message:", error.message);
      console.error("Axios error response:", error.response?.data);
    }
  }
};

export default getPayments;
