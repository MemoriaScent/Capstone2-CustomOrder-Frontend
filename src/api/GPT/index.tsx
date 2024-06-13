import { GPTState } from "@/components/templates/CustomTemplate/JAtom";
import axios from "axios";

require("dotenv").config();

const getGPTData = async (text: string, image: string): Promise<any> => {
  const response = await axios.get(image, {
    responseType: "blob",
  });

  const formData = new FormData();
  formData.append("file", response.data, "image.jpg");

  // try {
  //   const res = await axios.post(
  //     `${process.env.NEXT_PUBLIC_GPT_SERVER_URL}:${
  //       process.env.NEXT_PUBLIC_GPT_SERVER_PORT
  //     }/api/tasks/gpt?story=${encodeURIComponent(text)}&img_caption=%20`,
  //     {},
  //     {
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     }
  //   );
  //   return res.data;
  //   // return JSON.stringify(res.data);
  // }
  try {
    const res = await axios.post(
      `${process.env.NEXT_PUBLIC_GPT_SERVER_URL}:${
        process.env.NEXT_PUBLIC_GPT_SERVER_PORT
      }/api/tasks/?story=${encodeURIComponent(text)}`,
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    return res.data;
    // return JSON.stringify(res.data);
  } catch (err) {
    console.log(err);
    if (axios.isAxiosError(err)) {
      console.error("Axios error message:", err.message);
      console.error("Axios error response:", err.response?.data);
    }
  }
  return undefined;
};

export default getGPTData;
