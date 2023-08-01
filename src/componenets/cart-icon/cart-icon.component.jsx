import { ReactComponent as ShoppingIcon } from '../../assets/shopping-bag.svg';
import { SelectCartCount,SelectIsCartOpen } from '../../store/cart/cart.selector';
import { setIsCartOpen } from '../../store/cart/cart.reducer';
import { useDispatch } from 'react-redux';
import './cart-icon.styles.scss';
import { useSelector } from 'react-redux';

const CartIcon = () => {
  // const {  setIsCartOpen, cartCount } = useContext(CartContext);
  const dispatch=useDispatch();
  const isCartOpen=useSelector(SelectIsCartOpen);
  const cartCount=useSelector(SelectCartCount);
 

  const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));


  return (
    <div className='cart-icon-container' onClick={toggleIsCartOpen}>
      <ShoppingIcon className='shopping-icon' />
      <span className='item-count'>{cartCount}</span>
    </div>
  );
};

export default CartIcon;