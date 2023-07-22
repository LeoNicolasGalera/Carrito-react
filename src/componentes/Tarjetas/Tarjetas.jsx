import { Link } from "react-router-dom";

function Tarjeta(props) {
  const { id, title, img, price } = props;

  return (
    <div>
      <h1>{title}</h1>
      <img src={img} alt="" />
      <p>${price}</p>
      <Link to={`/productos/${id}`}>
        <button>Cotizar</button>
      </Link>
    </div>
  );
}

export default Tarjeta;
