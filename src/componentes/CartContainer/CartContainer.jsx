import React, { useContext } from "react";
import { cartContext } from "../../App";
import { Link } from "react-router-dom";

function CartContainer() {
  const { cart } = useContext(cartContext);
  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      {cart.map((item) => (
        <div key={item}>
          <img src={item.img} alt="" />
          <h2>{item.title}</h2>
          <p>Precio Unitario:$ {item.price}</p>

          <Link to="/checkout"> Comprar</Link>
        </div>
      ))}
    </div>
  );
}

export default CartContainer;
