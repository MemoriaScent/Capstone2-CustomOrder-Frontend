require("dotenv").config();

const getProductData = async () => {
  const response = await fetch(
    // 로컬에서 실행 시 SERVER -> LOCAL 변경하여 사용
    `${process.env.NEXT_PUBLIC_API_SERVER_URL}:${process.env.NEXT_PUBLIC_API_SERVER_PORT}/diffuser`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  console.log("------------------------------");
  return response.json();
};

export default getProductData;
