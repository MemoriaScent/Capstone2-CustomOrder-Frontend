import axios from "axios";

require("dotenv").config();

const setCustomDiffuser = async (
  Name: string | null,
  Image: string | null,
  Price: number,
  note: { like: []; hate: [] } | null
) => {
  const data = {
    Name,
    Image,
    Price,
    detail: note,
  };
  const authorization = localStorage.getItem("token");
  try {
    const response = await axios.post(
      `${process.env.NEXT_PUBLIC_API_SERVER_URL}:${process.env.NEXT_PUBLIC_API_SERVER_PORT}/diffuser/custom`,
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
  } catch (error) {
    console.error("Error during the API call:", error);
    if (axios.isAxiosError(error)) {
      console.error("Axios error message:", error.message);
      console.error("Axios error response:", error.response?.data);
    }
  }
};

export default setCustomDiffuser;
