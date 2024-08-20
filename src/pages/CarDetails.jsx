import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loader from "../components/Loader";
import axios from "axios";
import { MainContext } from "../utils/MainContext";
const CarDetails = () => {
  const { carID } = useParams();
  const { cartList, setCartList } = useContext(MainContext);
  const [product, setProduct] = useState({
    name: "",
    details: "",
    price: "",
    productImage: "",
  });
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const getSingleProducts = async () => {
      setLoading(true);
      try {
        const res = await axios
          .get(`http://localhost:5000/api/products/${carID}`)
          .then((res) => res.data);
        setProduct(res);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    };
    getSingleProducts();
  }, []);

  const addToCart = () => {
    const existing = cartList.find((item) => item.id === product.id);
    if (existing) {
      const updated = cartList.filter((item) => {
        if (item.id === existing.id) {
          return { ...item, quantity: item.quantity++ };
        } else {
          return item;
        }
      });
      setCartList(updated)
    } else {
      setCartList((prev) =>( [
        ...prev,
        {
          ...product,
          quantity: 1,
        },
      ]));
    }
  };

  return (
    <section className="carDetails">
      {loading && <Loader />}
      <div className="container">
        <div className="row">
          <div className="leftSide">
            <img
              src={`http://localhost:5000/${product.productImage}`}
              alt="car-img"
            />
          </div>
          <div className="rightSide">
            <h2 className="carTitle">{product.name}</h2>
            <p className="carDetails">{product.details}</p>
            <p className="carPrice">${product.price}</p>
            <button className="addBtn" onClick={addToCart}>
              ADD TO CARD
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CarDetails;
