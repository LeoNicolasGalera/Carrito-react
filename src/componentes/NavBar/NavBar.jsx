import "./nav.css";
import Logo from "../CartWidget/CartWidget";
import ListContainer from "../ItemListCointainer/ItemListContainer";

function Navbar() {
  return (
    <ul className="navbar">
      <li className="griferia">
        Griferia <ListContainer />
      </li>

      <li className="accesorio"> Accesorio</li>
      <li className="porcelanatos"> Porcelanatos</li>
      <li className="ceramica"> Ceramica</li>
      <>
        <div className="logo">
          <Logo />
        </div>
      </>
    </ul>
  );
}

export default Navbar;
