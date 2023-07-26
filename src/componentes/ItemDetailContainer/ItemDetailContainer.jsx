import React from "react";
import { useState, useEffect } from "react";
import { CategoryData, getProductData } from "../servicios/asynMock";
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
  }, [id]);
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
      <button>Cotizar</button>
    </div>
  );
}

export default ItemDetailContainer;
