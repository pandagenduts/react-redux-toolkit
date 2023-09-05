import { useSelector } from 'react-redux';
import Card from '../UI/Card';
import classes from './Cart.module.css';
import CartItem from './CartItem';

const Cart = (props) => {
  const { items: onCartItems } = useSelector(state => state.onCart)
  // console.log(onCartItems);

  return (
    <Card className={classes.cart}>
      <h2>Your Shopping Cart</h2>
      {onCartItems.length !== 0 ?
        <ul>
          {onCartItems.map((item) => (
            <CartItem 
            item={{ 
              title: item.title, 
              quantity: item.amount, 
              total: item.total, 
              price: item.price, 
              id: item.id 
            }} 
            key={item.id}/>
          ))}
        </ul>
        :
        <p>Your cart is empty!</p>
      }

      {/* <ul>
        <CartItem item={{ title: 'lorem', quantity: 3, total: 18, price: 6 }} />
      </ul> */}
    </Card>
  );
};

export default Cart;
