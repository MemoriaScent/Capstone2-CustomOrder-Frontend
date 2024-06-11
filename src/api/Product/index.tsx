require("dotenv").config();

const getProductData = async () => {
  const response = await fetch(
    // 로컬에서 실행 시 SERVER -> LOCAL 변경하여 사용
    `${process.env.API_SERVER_URL}:${process.env.API_SERVER_PORT}/deffuser`
  );
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export default getProductData;
