import React, { useState } from "react";

function Buttons(props) {
  const {
    padding,
    background,
    border,
    fontSize,
    color,
    overflow,
    borderradius,
    backgroundcolor,
    fontweight,
    boxshadow,
    nombre,
  } = props;

  return (
    <button
      style={{
        padding: padding,
        background: background,
        border: border,
        fontSize: fontSize,
        color: color,
        overflow: overflow,
        borderRadius: borderradius,
        backgroundColor: backgroundcolor,
        fontWeight: fontweight,
        boxshadow: boxshadow,
      }}
    >
      {nombre}
    </button>
  );
}

export function Contador(props) {
  const [count, setCount] = useState(1);

  function sumar() {
    setCount(count + 1);
  }

  function restar() {
    setCount(count - 1);
  }

  return (
    <div>
      <label>{props.stock}</label>
      <label>{count}</label>
      <button onClick={sumar}>+</button>
      <button onClick={restar}>-</button>
      <button onClick={() => props.confirm(count)}>Agregar a carrito</button>
    </div>
  );
}

export default Buttons;
