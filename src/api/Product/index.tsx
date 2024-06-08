const getProductData = async () => {
  const response = await fetch("http://113.198.229.155:8001/deffuser");
  if (!response.ok) {
    throw new Error("Failed to fetch data");
  }
  return response.json();
};

export default getProductData;
