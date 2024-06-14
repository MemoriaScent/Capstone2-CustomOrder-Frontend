import axios from "axios";

require("dotenv").config();

const getAccountData = async (): Promise<object | undefined> => {
  // 유저정보데이터 받아오기
  try {
    const authorization = localStorage.getItem("token");

    const response = await axios.get(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}:${process.env.NEXT_PUBLIC_API_SERVER_PORT}/user/myaccount`,
      {
        headers: {
          "Content-Type": "application/json",
          id: 1,
          Authorization: `Bearer ${authorization}`,
        },
      }
    );

    // const response = await fetch(
    //   `${process.env.NEXT_PUBLIC_API_SERVER_URL}:${process.env.NEXT_PUBLIC_API_SERVER_URL}/user/myaccount`,
    //   {
    //     method: "GET",
    //     headers: {
    //       "Content-Type": "application/json",
    //       Authorization: `Bearer ${authorization}`,
    //     },
    //   }
    // );

    if (!response.status) {
      throw new Error("Network response was not ok");
    }

    const data = await response.data;

    console.log(data);
    console.log(data.phone);

    return data;
  } catch (error) {
    console.error("Error during the API call:", error);
    if (axios.isAxiosError(error)) {
      console.error("Axios error message:", error.message);
      console.error("Axios error response:", error.response?.data);
    }

    return undefined;
  }
};

export default getAccountData;
