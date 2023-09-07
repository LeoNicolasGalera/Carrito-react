import React, { useContext } from "react";
import { cartContext } from "../../App";
import { Link } from "react-router-dom";
import { createOrder } from "../servicios/firebase";

function CartContainer() {
  const { cart } = useContext(cartContext);

  async function handleCheckout() {
    const orderData = {
      items: cart,
      buyer: {
        name: "Leandro",
        email: "Leandro@mail.com",
        phone: "12346597548",
      },
      date: new Date(),
      total: 9000,
    };

    const idOrder = await createOrder(orderData);
    alert(`Gracias por tu compra,tu numero de orden es ${idOrder}`);
  }

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>Cart</h1>
      {cart.map(item => (
        <div key={item}>
          <img src={item.img} width={100} alt="" />
          <h2>{item.title}</h2>
          <p>Precio Unitario:$ {item.price}</p>

          <Link to="/checkout"> Comprar</Link>
          <button onClick={handleCheckout}></button>
        </div>
      ))}
    </div>
  );
}

export default CartContainer;
