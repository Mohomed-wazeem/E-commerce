import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getProductById } from '../actions/productActions';
import { addToCart } from '../actions/cartActions';

export const ProductDes = () => {
  const { id: productid } = useParams();
  const dispatch = useDispatch();

  const getproductbyidstate = useSelector((state) => state.getProductByIdReducer);
  const { product, loading, error } = getproductbyidstate;

  function addtocart()
  {
    dispatch(addToCart(product,quantity))
  }

  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    dispatch(getProductById(productid));
  }, [dispatch, productid]);

  useEffect(() => {
    if (product && Number(product.countInStock) > 0) {
      setQuantity(1);
    }
  }, [product]);

  const increaseQty = () => {
    if (quantity < Number(product.countInStock)) {
      setQuantity((prev) => prev + 1);
    }
  };

  const decreaseQty = () => {
    if (quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!product || typeof product.countInStock === 'undefined') return null;

  const stock = Number(product.countInStock);

  return (
    <div className="container py-5">
      {loading ? (
        <h1>Loading...</h1>
      ) : error ? (
        <h1>Something went wrong</h1>
      ) : (
        <div className="row align-items-center">
          <div className="col-md-6 mb-4">
            <img
              src={product.image}
              alt={product.name}
              className="img-fluid rounded shadow-sm w-100"
              style={{ maxHeight: '400px', objectFit: 'contain' }}
            />
          </div>

          <div className="col-md-6">
            <h2 className="fw-bold mb-3">{product.name}</h2>
            <p className="text-muted mb-3">{product.description}</p>
            <h5 className="text-success mb-3">
              <strong>Price:</strong> ${product.price}
            </h5>
            <hr />

            <h6 className="mb-3 text-start">Quantity</h6>

            <div className="d-flex align-items-center gap-3 mb-4 flex-wrap">
              <div className="d-flex align-items-center border rounded px-2 py-1" style={{ width: 'fit-content' }}>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={decreaseQty}
                  disabled={quantity <= 1}
                >
                  −
                </button>
                <span className="mx-3 fw-bold">{quantity}</span>
                <button
                  className="btn btn-outline-secondary btn-sm"
                  onClick={increaseQty}
                  disabled={quantity >= stock}
                >
                  +
                </button>
              </div>

              <button
                className="btn btn-primary"
                disabled={stock === 0}
                onClick={addtocart}
              >
                Add to Cart
              </button>
            </div>

            <p className="text-muted text-start">
              <strong>Availability:</strong>{' '}
              {stock > 0 ? (
                <span className="text-success">In Stock</span>
              ) : (
                <span className="text-danger">Out of Stock</span>
              )}
            </p>
          </div>
        </div>
      )}
    </div>
  );
};
