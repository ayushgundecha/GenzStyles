import { Fragment } from "react";
import { Outlet,Link } from "react-router-dom";

import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import './navigation.styles.scss';
import { signOutUser } from "../../utils/firebase/firebase.utils";

import CartIcon from "../../componenets/cart-icon/cart-icon.component";
import CartDropdown from "../../componenets/card-dropdown/cart-dropdown.component";
import { useSelector } from "react-redux";
import { selectCurrentUser } from "../../store/user/user.selector";
import { SelectIsCartOpen } from "../../store/cart/cart.selector";

const Navigation = () => {
  const currentUser=useSelector(selectCurrentUser);
  
  const isCartOpen  = useSelector(SelectIsCartOpen);

  

  return (
    <Fragment>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrwnLogo className='logo' />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>

          {currentUser ? (
            <span className='nav-link' onClick={signOutUser}>
              SIGN OUT
            </span>
          ) : (
            <Link className='nav-link' to='/auth'>
              SIGN IN
            </Link>
          )}
          <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;