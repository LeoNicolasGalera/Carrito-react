import { useContext } from "react";
import { CiShoppingCart } from "react-icons/ci";
import { cartContext } from "../../App";

function Logo() {
  const context = useContext(cartContext);

  return (
    <li>
      <CiShoppingCart size="50px" color="purple" />
      <span>{context.cart.length}</span>
    </li>
  );
}

export default Logo;
