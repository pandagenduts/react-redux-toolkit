import { UIActions } from "./ui-slice"
import { onCartActions } from "./on-cart"


export const fetchFromFirebase = () => {
  return async (dispatch) => {

    const theFetch = async () => {
      const response = await fetch('https://react-http-practice-e4a0e-default-rtdb.asia-southeast1.firebasedatabase.app/redux-cart.json');

      if (!response.ok) {
        throw new Error('failed to fetch the data.')
      }

      const data = response.json();

      return data;
    }

    try {
      const theData = await theFetch();
      dispatch(onCartActions.replaceCart({
        items: theData.items || [],
        totalItems: theData.totalItems || 0,
      }));
    }
    catch (error) {
      dispatch(UIActions.updateNotif({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!',
      }))
    }

  }
}

export const cartToFirebase = (cartData) => {
  return async (dispatch) => {
    dispatch(UIActions.updateNotif({
      status: 'pending',
      title: 'Sending...',
      message: 'Sending cart data!',
    }))

    const theFetch = async () => {
      const response = await fetch('https://react-http-practice-e4a0e-default-rtdb.asia-southeast1.firebasedatabase.app/redux-cart.json', {
        method: 'PUT',
        body: JSON.stringify(cartData)
      })

      if (!response.ok) {
        throw new Error('Failed to send the data.')
      }

      const data = response.json();

      return data;
    }

    try {
      await theFetch();
      dispatch(UIActions.updateNotif({
        status: 'success',
        title: 'Success!',
        message: 'Sent cart data successfully!',
      }))
    }
    catch (error) {
      dispatch(UIActions.updateNotif({
        status: 'error',
        title: 'Error!',
        message: 'Fetching cart data failed!',
      }))
    }

  }
}