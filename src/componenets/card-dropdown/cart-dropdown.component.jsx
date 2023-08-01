import Button from "../button/button.component";
import './cart-dropdown.styles.scss';
import CartItem from "../cart-item/cart-item.component";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { SelectCartItems } from "../../store/cart/cart.selector";


const CartDropdown = () => {
    const cartItems  =useSelector(SelectCartItems);
    const navigate = useNavigate();
  
    const goToCheckoutHandler = () => {
      navigate('/checkout');
    };
  
    return (
      <div className='cart-dropdown-container'>
        <div className='cart-items'>
          {cartItems.map((item) => (
            <CartItem key={item.id} cartItem={item} />
          ))}
        </div>
        <Button onClick={goToCheckoutHandler}>GO TO CHECKOUT</Button>
      </div>
    );
  };
  
  export default CartDropdown;