import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import ProductDetails from "./Components/ProductDetails/ProductDetails";
import Header from "./Layouts/Header/Header";
import Footer from "./Layouts/Footer/Footer";
import MenProductListings from "./Components/ProductListing/MenProductListings/MenProductListings";
import AccessoriesListings from "./Components/ProductListing/AccessoriesListings/AccessoriesListings";
import JewelleryListings from "./Components/ProductListing/JewelleryListings/JewelleryListings";
import Cart from "./Components/Cart/Cart";
import Hamburger from "./Layouts/Hamburger/Hamburger";
import WomenProductListing from "./Components/ProductListing/WomenProductListing/WomenProductListing";
import Home from "./Components/Home/Home";
import Checkout from "./Components/Checkout/Checkout";
import Shipmethod from "./Components/Checkout/Shipmethod";
import Paymentmethods from "./Components/Checkout/Paymentmethods";
import Review from "./Components/Checkout/Review";
import OrderSuccess from "./Components/Checkout/OrderSuccess";
import AllProducts from "./Components/ProductListing/AllProducts/AllProducts";
import CreateEvent from "./Components/CreateEvents/CreateEvent";
import { setUser } from "./Redux/actions/productsActions";
import { useDispatch } from "react-redux";
import { auth } from "./firebase";
import store from "./Redux/store";
// import ReactCalendar from "../Calendar/ReactCalendar";

import Login from "./Components/pages/Login";
import Register from "./Components/pages/Register";
import EditEvent from "./Components/CreateEvents/EditEvent";
import EventType from "./Components/CreateEvents/EventType";
import MardiGras from "./Components/CreateEvents/MardiGras";
import ReactCalendar from "./Components/Calendar/ReactCalendar";

function App() {
  const dispatch = useDispatch();
  console.log("Store", store.getState());
  const [profile, setProfile] = useState();
  const [cartItems, setCartItems] = useState([]);
  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      if (authUser) {
        setProfile(authUser);
        dispatch(setUser(authUser));
      } else {
        dispatch(setUser(null));
      }
    });
  }, [dispatch]);
  const onAdd = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist) {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty + 1 } : x
        )
      );
    } else {
      setCartItems([...cartItems, { ...product, qty: 1 }]);
    }
  };
  const onRemove = (product) => {
    const exist = cartItems.find((x) => x.id === product.id);
    if (exist.qty === 1) {
      setCartItems(cartItems.filter((x) => x.id !== product.id));
    } else {
      setCartItems(
        cartItems.map((x) =>
          x.id === product.id ? { ...exist, qty: exist.qty - 1 } : x
        )
      );
    }
  };
  return (
    <div className="App">
      <Router>
        <Header
          countCartItems={cartItems.length}
          profile={profile}
          setProfile={setProfile}
        />
        <Hamburger countCartItems={cartItems.length} />
        <Routes>
          <Route path="/" exact element={<Home profile={profile} />} />
          <Route path="/women" exact element={<WomenProductListing />} />
          <Route
            path="/product/:productId"
            element={
              <ProductDetails
                onAdd={onAdd}
                cartItems={cartItems}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/cart"
            element={
              <Cart cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            }
          />
          <Route path="/men" element={<MenProductListings />} />
          <Route path="/jewellery" element={<JewelleryListings />} />
          <Route path="/electronics" element={<AccessoriesListings />} />
          <Route path="/allproducts" element={<AllProducts />} />

          <Route exact path="/login" element={<Login />} />
          <Route exact path="/register" element={<Register />} />

          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/shipmethod"
            element={
              <Shipmethod
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/payment"
            element={
              <Paymentmethods
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/review"
            element={
              <Review cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            }
          />
          <Route
            path="/orderconfirmation"
            element={
              <OrderSuccess
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />

          <Route
            path="/create-event"
            element={<CreateEvent profile={profile} setProfile={setProfile} />}
          />
          <Route
            path="/edit-event"
            element={<EditEvent profile={profile} setProfile={setProfile} />}
          />
          <Route path="/eventtype" element={<EventType />} />
          <Route path="/mardigras" element={<MardiGras />} />
          <Route path="/ReactCalendar" element={<ReactCalendar />} />

          <Route
            path="/checkout"
            element={
              <Checkout
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/shipmethod"
            element={
              <Shipmethod
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/payment"
            element={
              <Paymentmethods
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/review"
            element={
              <Review cartItems={cartItems} onAdd={onAdd} onRemove={onRemove} />
            }
          />
          <Route
            path="/orderconfirmation"
            element={
              <OrderSuccess
                cartItems={cartItems}
                onAdd={onAdd}
                onRemove={onRemove}
              />
            }
          />
          <Route
            path="/create-event"
            element={<CreateEvent profile={profile} />}
          />
          <Route path="/eventtype" element={<EventType />} />
          <Route path="/mardigras" element={<MardiGras />} />
          <Route path="/ReactCalendar" element={<ReactCalendar />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
