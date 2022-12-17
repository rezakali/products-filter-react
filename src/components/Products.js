import Product from "./Product";

const Products = ({ products, category }) => {

  return (
    <>
    {category}
      {products.map((product) => {

        if (product.category === category) {
          return <Product key={product.id} {...product} />;
        }
      })}
    </>
  );
};

export default Products;
