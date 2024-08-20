// Router
import { Routes, Route } from "react-router-dom";

// Pages
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import CarDetails from "./pages/CarDetails";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Cart from "./pages/Cart";
import NotFound from "./pages/NotFound";

// Components
import Header from "./components/Header";
import Footer from "./components/Footer";
import GlobalContext from "./utils/MainContext";
const App = () => {
  return (
    <GlobalContext>
      <Header />
      <Routes>
        <Route path="/cart" element={<Cart />} />
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/car-details/:carID" element={<CarDetails />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
    </GlobalContext>
  );
};

export default App;
