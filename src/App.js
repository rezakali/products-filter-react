import React, { useEffect, useState } from "react";
import Loading from "./components/Loading";
import Products from "./components/Products";
import Proloading from "./components/Proloading";

function App() {
  const [loading, setLoading] = useState(true);
  const [proloading, setProLoading] = useState(false);
  const [products, setProducts] = useState([]);
  const [category, setCategory] = useState("smartphones");
  const uri = "https://dummyjson.com/products";

  const handleChange = (e) => {
    setProLoading(true);
    setInterval(() => {
      setProLoading(false);
      setCategory(e.target.value);
    }, 500);
  };

  const fetchData = async () => {
    setLoading(true);
    try {
      const response = await fetch(uri);
      const data = await response.json();
      const products = data.products;
      setLoading(false);
      setProducts(products);
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) {
    return <Loading />;
  }
  return (
    <div className="App">
      <div className="container">
        <div className="top-wrapper">
          <h2>Product Listing React</h2>
          <div className="category-sector">
            <h4>{products.length} products available</h4>
            <div>
              <label htmlFor="products">Select Products</label>
              <select name="products" id="products" defaultValue={"smartphones"} onChange={(e) => handleChange(e)}>
                {/* <option value="all">All</option> */}
                <option value="smartphones">Smartphones</option>
                <option value="laptops">Laptops</option>
                <option value="fragrances">Fragrances</option>
                <option value="skincare">Skincare</option>
                <option value="home-decoration">Home Decoration</option>
              </select>
            </div>
          </div>
        </div>
        <div className="products-wrapper">
          {proloading ? <Proloading /> : <Products products={products} category={category} />}
          {/* <Proloading /> */}
        </div>
      </div>
    </div>
  );
}

export default App;
