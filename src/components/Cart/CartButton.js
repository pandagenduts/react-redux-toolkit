import classes from './CartButton.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { UIActions } from '../../store/ui-slice';

const CartButton = (props) => {
  const { totalItems } = useSelector(state => state.onCart)
  const dispatch = useDispatch();

  const cartButtonHandler = () => {
    dispatch(UIActions.toggleCart());
  }

  return (
    <button className={classes.button} onClick={cartButtonHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{totalItems}</span>
    </button>
  );
};

export default CartButton;
