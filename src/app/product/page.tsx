import getProductData from "@/api/Product";
import ProductTemplate from "@/components/templates/ProductTemplate";

const ProductPage = async () => {
  let products = await getProductData();
  products = products.sort(
    (
      a: { id: number; Name: string; Price: number },
      b: { id: number; Name: string; Price: number }
    ) => a.id - b.id
  );
  return (
    <div className="flex flex-col items-center mt-100">
      <ProductTemplate products={products}></ProductTemplate>;
    </div>
  );
};

export default ProductPage;
