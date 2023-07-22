import React from "react";
import { useState, useEffect } from "react";
import { getProductData } from "../servicios/asynMock";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const [products, setProducts] = useState({});
  const { id } = useParams();

  async function requestDetail() {
    const respuesta = await getProductData(id);
    setProducts(respuesta);
  }

  useEffect(() => {
    requestDetail();
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      <h1>{products.title}</h1>
      <img src={products.img} alt="" />
      <p>${products.price}</p>
      <p>{products.stock}</p>
      <button>Cotizar</button>
    </div>
  );
}

export default ItemDetailContainer;
