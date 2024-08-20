import { createContext, useState, useEffect } from "react";

export const MainContext = createContext();
const GlobalContext = ({ children }) => {
  const [cartList, setCartList] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const calcCardCount = () => {
    const cartCount = cartList
      .map((item) => item.quantity)
      .reduce((acc, curr) => acc + curr, 0);
    setTotal(cartCount);
  };
  const calcTotalPrice = () => {
    const multiSum = cartList.map((item) => item.quantity * item.price);
    const totalSum = multiSum.reduce((acc, curr) => acc + curr, 0);
    setTotalPrice(totalSum);
  };
  useEffect(() => {
    calcCardCount();
    calcTotalPrice();
  }, [cartList]);

  const globalData = { cartList, setCartList, total, totalPrice};
  return (
    <MainContext.Provider value={globalData}>{children}</MainContext.Provider>
  );
};
export default GlobalContext;
