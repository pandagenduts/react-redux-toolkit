import { useDispatch, useSelector } from 'react-redux';
import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import { useEffect } from 'react';
import { cartToFirebase, fetchFromFirebase } from './store/on-cart-actions';
import Notification from './components/UI/Notification'

let firstInit = true;

function App() {
  const { isShowCart, theNotification } = useSelector(state => state.theUI)
  const { cartDataChanged } = useSelector(state => state.onCart)
  const wholeCartData = useSelector(state => state.onCart)

  const dispatch = useDispatch();

  // console.log(firstFetch);

  useEffect(() => {
    dispatch(fetchFromFirebase())
  }, [dispatch])

  useEffect(() => {
    if (firstInit) {
      firstInit = false;
      return;
    }

    if (cartDataChanged) {
      dispatch(cartToFirebase(wholeCartData))
    }

  }, [wholeCartData, dispatch])

  return (
    <>
      {theNotification && <Notification status={theNotification.status} title={theNotification.title} message={theNotification.message} /> }
      <Layout>
        {isShowCart && <Cart />}
        <Products />
      </Layout>

    </>
  );
}

export default App;
