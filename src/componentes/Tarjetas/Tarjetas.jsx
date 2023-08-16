import { Link } from "react-router-dom";

import Buttons from "../Piezas/Piezas";
function Tarjeta(props) {
  const { id, title, img, price } = props;

  return (
    <div>
      <h1>{title}</h1>

      <img src={img} alt="" width={"50%"} />
      <p>
        <h3>${price}</h3>
      </p>
      <Link to={`/productos/${id}`}>
        <Buttons
          padding="1.1em 2em"
          background="none"
          border="2px solid #fff"
          fontSize="15px"
          color="#131313"
          overflow="hidden"
          borderradius="12px"
          backgroundcolor=" #ff6700"
          fontweight="bolder"
          boxshadow=" 0 2px 0 2px #000"
          nombre="Ver Producto"
        />
      </Link>
    </div>
  );
}

export default Tarjeta;
