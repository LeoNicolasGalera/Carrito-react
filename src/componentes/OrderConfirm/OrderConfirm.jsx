import React, { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getOrder } from "../servicios/firebase";

function OrderConfirm() {
  const [orderData, SetOrderData] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    getOrder(id).then((order) => {
      SetOrderData(order);
    });
  }, []);

  return (
    <div>
      <h1>Gracias por tu compra</h1>
      {orderData ? (
        <div>
          Fecha de la compra:{orderData.date}
          <p>
            Tus productos comprados:
            {orderData.items.map((item) => {
              return (
                <small>
                  {item.title}-{item.count}
                </small>
              );
            })}
          </p>
        </div>
      ) : (
        <p>Cargando.....</p>
      )}
    </div>
  );
}

export default OrderConfirm;
