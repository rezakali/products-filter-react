import Product from "./Product";

const Products = ({ products, category }) => {
  return (
    <>
      {products.map((product) => {
        if (product.category === category) {
          return <Product key={product.id} {...product} />;
        }
      })}
    </>
  );
};

export default Products;
