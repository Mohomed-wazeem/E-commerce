export const addToCart = (product, quantity) => (dispatch, getState) => {
    const cartItem = {
      name: product.name,
      _id: product._id,
      image: product.image,       
      price: product.price,
      countInStock: product.countInStock,
      quantity,
    };
  
    dispatch({ type: 'ADD_TO_CART', payload: cartItem });
  
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().addToCartReducer.cartItems)
    );
  };
  
  export const removeFromCart = (productId) => (dispatch, getState) => {
    dispatch({ type: 'REMOVE_FROM_CART', payload: productId });
  
    localStorage.setItem(
      'cartItems',
      JSON.stringify(getState().addToCartReducer.cartItems)
    );
  };
  