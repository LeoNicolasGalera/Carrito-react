import { CiTextAlignCenter, CiTextAlignJustify } from "react-icons/ci";
import Navbar from "../NavBar/NavBar";

function ListContainer(greeting) {
  let grif = ["Baño", "Ducha", "Ducha"];
  let cera = ["San Lorenzo ", "Cerro Negro"];
  return (
    <div>
      <li>{grif}</li>

      <li>{cera}</li>
    </div>
  );
}

export default ListContainer;
