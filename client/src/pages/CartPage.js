import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, removeFromCart } from '../actions/cartActions';

export const CartPage = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector(state => state.addToCartReducer?.cartItems || []);
  const [checkedItems, setCheckedItems] = useState([]);

  const changeQuantity = (item, newQty) => {
    dispatch(addToCart(item, newQty));
  };

  const removeItem = (id) => {
    dispatch(removeFromCart(id));
  };

  const handleCheckboxChange = (itemId) => {
    setCheckedItems(prev =>
      prev.includes(itemId) ? prev.filter(id => id !== itemId) : [...prev, itemId]
    );
  };

  const itemsCount = cartItems
    .filter(item => checkedItems.includes(item._id))
    .reduce((sum, item) => sum + item.quantity, 0);

  const totalPrice = cartItems
    .reduce((sum, item) =>
      checkedItems.includes(item._id) ? sum + item.quantity * item.price : sum
    , 0)
    .toFixed(2);

  const deleteCheckedItems = () => {
    checkedItems.forEach(id => removeItem(id));
    setCheckedItems([]);
  };

  if (cartItems.length === 0) {
    return <h2 className="text-center mt-5">Your cart is empty</h2>;
  }

  return (
    <div className="container py-5">
      <div className="d-flex justify-content-between align-items-center mb-4">
        <h2 className="fs-4">My Cart</h2>
        <button
          className="btn btn-danger btn-sm"
          onClick={deleteCheckedItems}
          disabled={checkedItems.length === 0}
        >
          <i className="bi bi-trash-fill me-1"></i>
        </button>
      </div>

      <div className="row g-4">
        <div className="col-12 col-lg-8">
          {cartItems.map(item => (
            <div key={item._id} className="card mb-3 shadow-sm position-relative">
              {/* Checkbox in top-right */}
              <input
                type="checkbox"
                checked={checkedItems.includes(item._id)}
                onChange={() => handleCheckboxChange(item._id)}
                style={{
                  position: 'absolute',
                  top: '10px',
                  right: '10px',
                  zIndex: 1
                }}
              />

              <div className="row g-0 align-items-center">
                <div className="col-3 col-md-3">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="img-fluid rounded-start"
                    style={{ maxHeight: '120px', objectFit: 'contain' }}
                  />
                </div>
                <div className="col-8 col-md-9">
                  <div className="card-body py-2">
                    <div className="d-flex justify-content-between align-items-start flex-wrap">
                      <div className="mb-2 mb-md-0">
                        <h5 className="card-title mb-2 fs-6">{item.name}</h5>
                        <p className="text-success mb-1 text-start fw-bold">${item.price}</p>
                      </div>
                    </div>
                    <div className="d-flex align-items-center mt-2">
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => changeQuantity(item, item.quantity - 1)}
                        disabled={item.quantity <= 1}
                      >
                        −
                      </button>
                      <span className="mx-3 fw-bold">{item.quantity}</span>
                      <button
                        className="btn btn-outline-secondary btn-sm"
                        onClick={() => changeQuantity(item, item.quantity + 1)}
                        disabled={item.quantity >= item.countInStock}
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="col-12 col-lg-4">
          <div className="card p-4 shadow-sm">
            <h5 className="mb-3">Order Summary</h5>
            <p className="mb-1">Items: <strong>{itemsCount}</strong></p>
            <p className="mb-3">Total: <strong>${totalPrice}</strong></p>
            <button className="btn btn-primary  py-2">
            Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
