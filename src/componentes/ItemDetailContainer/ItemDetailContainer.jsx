import React, { useContext } from "react";
import { useState, useEffect } from "react";
import { getProductData } from "../servicios/firebase";
import { useParams } from "react-router-dom";
import Swal from "sweetalert2";
import Buttons, { Contador } from "../Piezas/Piezas";
import { cartContext } from "../../App";

function ItemDetailContainer() {
  const [products, setProducts] = useState({});
  const { id } = useParams();
  const { addToCart } = useContext(cartContext);

  useEffect(() => {
    async function requestDetail() {
      const respuesta = await getProductData(id);
      setProducts(respuesta);
    }

    requestDetail();
  }, [id]);

  function addtocart(count) {
    addToCart(products, count);

    Swal.fire({
      position: "center",
      icon: "success",
      showConfirmButton: false,
      title: `Agregaste ${count} al carrito `,
      timer: 2000,
    });
  }

  return (
    <div
      style={{
        display: "flex",
        width: "50%",
        alignItems: "center",
        flexDirection: "column",
      }}
    >
      <h1>{products.title}</h1>
      <h2>{products.description} </h2>
      <img src={products.img} alt="" width={"50%"} />
      <p>$ {products.price}</p>
      <p>Stock:{products.stock}</p>

      <Contador confirm={addtocart} />
    </div>
  );
}

export default ItemDetailContainer;
