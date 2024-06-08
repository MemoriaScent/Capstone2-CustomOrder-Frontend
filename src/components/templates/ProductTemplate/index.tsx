import getProductData from "@/api/Product";
import ProductList from "@/components/organism/ProductList";

const ProductTemplate = async () => {
  let products = await getProductData();
  products = products.sort((a, b) => a.id - b.id);
  console.log(products);
  return (
    <div className="flex flex-col items-center mt-100">
      <ProductList products={products}></ProductList>
    </div>
  );
};

export default ProductTemplate;
