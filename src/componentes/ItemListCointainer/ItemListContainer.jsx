import React, { useEffect, useState } from "react";

import { getData, categoryData } from "../servicios/firebase";

import Tarjeta from "../Tarjetas/Tarjetas";
import { useParams } from "react-router-dom";
import { Card } from "../Piezas/Piezas";

function ItemListContainer() {
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();

  useEffect(() => {
    async function requestProducts() {
      let respuesta = [];

      if (categoryId === undefined) {
        respuesta = await getData();
      } else {
        respuesta = await categoryData(categoryId);
      }
      setProducts(respuesta);
    }

    requestProducts();
  }, [categoryId]);

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
          width: "100%",
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
