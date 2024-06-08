import ProductFilter from "@/components/molecule/\bProductFilter";
import ProductItem from "@/components/molecule/ProductItem";

const ProductList = ({ products }) => {
  return (
    <div>
      <ProductFilter></ProductFilter>
      <div className="flex flex-row pt-10">
        {products.map((index, value) => {
          return (
            <ProductItem
              id={index.id}
              name={index.Name}
              price={index.Price}
            ></ProductItem>
          );
        })}
      </div>
    </div>
  );
};

export default ProductList;
