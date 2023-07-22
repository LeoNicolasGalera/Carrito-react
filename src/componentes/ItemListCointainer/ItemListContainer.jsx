import React, { useState } from "react";
import getData from "../servicios/asynMock";
import Tarjeta from "../Tarjetas/Tarjetas";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  async function requestProducts() {
    const respuesta = await getData();
    setProducts(respuesta);
  }

  requestProducts();

  return (
    <>
      <div>
        <h1 style={{ textAlign: "center" }}>DETALLE PRODUCTOS </h1>
      </div>

      <div
        style={{
          display: "grid",
          gridTemplateRows: "repeat(4,200%)",
          gridTemplateColumns: "30% 30% 30%",
          margin: "20px",
          overflow: "hidden",
          gap: "30px",
          textAlign: "center",
        }}
      >
        {products.map((item) => (
          <Tarjeta {...item} />
        ))}
      </div>
    </>
  );
}

export default ItemListContainer;
