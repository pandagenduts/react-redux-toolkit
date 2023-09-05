import { useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';

function App() {
  const { isShowCart } = useSelector(state => state.cartToggle)
  // const { items: onCartItems } = useSelector(state => state.onCart)
  // const budi = useSelector(state => state.onCart.items)
  // console.log(budi);
  // console.log(onCartItems);

  return (
    <Layout>
      {isShowCart && <Cart />}
      <Products />
    </Layout>
  );
}

export default App;
