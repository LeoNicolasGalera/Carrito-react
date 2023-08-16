import Navbar from "./componentes/NavBar/NavBar";
import ItemListContainer from "./componentes/ItemListCointainer/ItemListContainer";
import ItemDetailContainer from "./componentes/ItemDetailContainer/ItemDetailContainer";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import CartContainer from "./componentes/CartContainer/CartContainer";
import OrderConfirm from "./componentes/OrderConfirm/OrderConfirm";

import Checkout from "./componentes/Checkout/Checkout";

const cartContext = createContext({ cart: [5, 10, 5, 50] });

function CartProvider(props) {
  const [cart, setCart] = useState([]);
  const test = "ok";

  function addToCart(productos, count) {
    const newCart = [...cart];
    const newItemCart = { count, ...productos };
    newCart.push(newItemCart);
    setCart(newCart);
  }

  return (
    <cartContext.Provider value={{ cart, test, addToCart }}>
      {props.children}
    </cartContext.Provider>
  );
}

function App() {
  return (
    <div>
      <CartProvider>
        <BrowserRouter>
          <Navbar />

          <Routes>
            <Route path="/inicio" element={<ItemListContainer />} />
            <Route path="/productos/:id" element={<ItemDetailContainer />} />
            <Route
              path="/category/:categoryId"
              element={<ItemListContainer />}
            />

            <Route path="*" element={<h1>Page not found: 404</h1>} />
            <Route path="/checkout" element={<Checkout />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/order-confirmation/:id" element={<OrderConfirm />} />
          </Routes>
        </BrowserRouter>
      </CartProvider>
    </div>
  );
}

export default App;

export { cartContext };
