import { useNavigate } from "react-router-dom";
import { createOrder } from "../servicios/firebase";
import { cartContext } from "../../App";

import React, { useContext, useState } from "react";

function Checkout() {
  const [buyer, setBuyer] = useState({
    firstname: "",
    lastname: "",
    age: "",
  });

  const navigate = useNavigate();
  const { cart } = useContext(cartContext);

  function handleCheckout(evt) {
    evt.preventDefault();
    const orderData = {
      items: cart,
      buyer: buyer,
      date: new Date(),
      total: 9000,
    };

    try {
      const idOrder = createOrder(orderData);
      alert(`Gracias por tu compra , tu numero de orden es ${idOrder}`);
      navigate(`/order-confirmation/${idOrder}`);
    } catch (error) {
      alert(`No se pudo realizar la compra ${error.message}`);
    }
  }

  function onInputChange(evt) {
    const value = evt.target.value;
    const field = evt.target.name;
    //buyer["firstname"] -> buyer.firstname
    const newState = { ...buyer };
    newState[field] = value;
    setBuyer(newState);
  }

  function resetForm(e) {
    e.preventDefault();
    setBuyer({
      firstname: "",
      lastname: "",
      age: "",
    });
  }

  return (
    <form>
      <h2>Completa tus datos para completar la compra🛍</h2>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label htmlFor="lasttname" style={{ width: "100px", marginRight: 4 }}>
          Nombre
        </label>
        <input
          value={buyer.firstname}
          name="firstname"
          type="text"
          onChange={onInputChange}
        />
      </div>

      <div style={{ display: "flex", marginBottom: 8 }}>
        <label style={{ width: "100px", marginRight: 4 }}>Edad</label>
        <input
          value={buyer.age}
          name="age"
          type="number"
          onChange={onInputChange}
        />
      </div>

      <button onClick={handleCheckout}>Crear orden</button>
      <button onClick={resetForm}>Cancelar</button>
    </form>
  );
}

export default Checkout;

// disabled={!(buyer.firstname !== "" && buyer.lastname !== "" && buyer.age !== "")}
