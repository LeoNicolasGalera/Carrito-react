import "./nav.css";
import Logo from "../CartWidget/CartWidget";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav>
      <ul className="navbar">
        <h1>
          <li className="principal">
            <Link to="/inicio">PRODUCTOS</Link>
          </li>
        </h1>

        <li className="griferia">
          <Link to="/category/griferia">Griferia</Link>
        </li>

        <li className="accesorio">
          <Link to="/category/accesorio">Accesorio</Link>
        </li>
        <li className="porcelanatos">
          <Link to="/category/porcelanato ">Porcelanatos</Link>
        </li>
        <li className="ceramica">
          <Link to="/category/ceramica">Ceramica</Link>
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
