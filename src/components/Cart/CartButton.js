import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { cartToggleActions } from '../../store/cart-toggle-slice';

const CartButton = (props) => {
  const { totalItems } = useSelector(state => state.onCart)
  const dispatch = useDispatch();

  const cartButtonHandler = () => {
    dispatch(cartToggleActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
