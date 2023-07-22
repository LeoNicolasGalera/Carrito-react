import "./nav.css";
import Logo from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <ul className="navbar">
        <h1>
          <li className="principal">
            <Link to="/inicio">Productos</Link>
          </li>
        </h1>

        <li className="griferia">
          <Link to="productos">Griferia</Link>
        </li>

        <li className="accesorio">
          <Link to="/">Accesorio</Link>
        </li>
        <li className="porcelanatos">
          <Link to="/">Porcelanatos</Link>
        </li>
        <li className="ceramica">
          <Link to="/">Ceramica</Link>
        </li>
        <>
          <div className="logo">
            <Logo />
          </div>
        </>
      </ul>
    </nav>
  );
}

export default Navbar;
