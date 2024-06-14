import axios from "axios";

require("dotenv").config();

const getGPTData = async (text: string, image: File | null): Promise<any> => {
  console.log(text);
  console.log(image);
  // image = "/product/product_1_1.png";
  // const response = await axios.get(image, {
  //   responseType: "blob",
  // });

  // console.log(response);
  // console.log(image);

  const formData = new FormData();
  if (image != null) formData.append("file", image);

  // try {
  //   const res = await axios.post(
  //     `${process.env.NEXT_PUBLIC_GPT_SERVER_URL}:${
  //       process.env.NEXT_PUBLIC_GPT_SERVER_PORT
  //     }/api/tasks/gpt?story=${encodeURIComponent(text)}&img_caption=아무런말`,
  //     {},
  //     {
  //       headers: {
  //         Accept: "application/json",
  //       },
  //     }
  //   );
  //   return res.data;
  // // return JSON.stringify(res.data);
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
    console.log(res.data);
    return res.data;
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
