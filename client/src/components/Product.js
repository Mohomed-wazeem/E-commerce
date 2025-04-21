import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';

export const Product = ({ product }) => {
  return (
    <div className='col-md-3 mb-4'>
      <div className='card h-100 shadow-sm border-0'>
        <Link to={`product/${product.id}`} className="text-decoration-none text-dark">
          <img
            src={product.image}
            className='card-img-top img-fluid p-3'
            alt={product.name}
            style={{ height: '200px', objectFit: 'contain' }}
          />
          <div className='card-body text-start'>
            <h5 className='card-title fw-bold'>{product.name}</h5>
            <div className='mb-2'>
              <Rating
                initialRating={product.rating}
                emptySymbol="fa fa-star-o fa-sm text-warning"
                fullSymbol="fa fa-star fa-sm text-warning"
              />
            </div>
            <p className='card-text text-success fw-semibold'>Price: ${product.price}</p>
          </div>
        </Link>
      </div>
    </div>
  );
};
