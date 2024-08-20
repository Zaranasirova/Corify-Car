import { useEffect, useState } from "react";
import ShopCard from "../components/ShopCard";
import axios from "axios";
import Loader from "../components/Loader";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const getProducts = async () => {
   setLoading(true)
    try {
      const res=await axios.get("http://localhost:5000/api/products").then((res) => res.data);
      setProducts(res);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    getProducts()
  }, []);
  return (
    <section className="shop">
      {loading && <Loader />}
      <div className="container">
        <div className="row">
          <h2 className="title">Buy Car</h2>
          <div className="carsBox">
            {
              products.map(item=>(
                <ShopCard  data={item} key={item.id}/>
              ))
            }
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Shop;
