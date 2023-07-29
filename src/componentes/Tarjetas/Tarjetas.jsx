import { Link } from "react-router-dom";

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
        <button style={{ fontSize: "16px" }}>Cotizar</button>
      </Link>
    </div>
  );
}

export default Tarjeta;
