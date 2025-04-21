// import React from 'react'
// import { useParams } from 'react-router-dom'
// import products from '../products'

// export const ProductDes = () => {
//   const { id } = useParams();
//   const product = products.find(product => product.id === id);

//   if (!product) {
//     return <h2 className='text-center mt-5'>Product not found</h2>;
//   }

//   return (
//     <div className="container mt-5">
//       <div className="row align-items-center">
//         <div className="col-md-6 mb-4">
//           <img
//             src={product.image}
//             alt={product.name}
//             className="img-fluid rounded shadow-sm w-100 Desimg"
//           />
//         </div>

//         <div className="col-md-6">
//           <h2 className="fw-bold">{product.name}</h2>
//           <p className="text-muted">{product.description}</p>
//           <p><strong>Price:</strong> ${product.price}</p><hr/>
//           <h5>Select Quantity</h5><br/>
//             <div className="row mb-3">
//                 <div className="col-6">
//                     <select className="form-select">
//                     {[...Array(product.countInStock).keys()].map((x) => (
//                         <option key={x + 1} value={x + 1}>
//                         {x + 1}
//                         </option>
//                     ))}
//                     </select>
//                 </div>

//                 <div className="col-6">
//                     <button className="btn btn-primary w-100">Add to Cart</button>
//                 </div>
//             </div>

            


//         </div>
//       </div>
//     </div>
//   );
// };


import React from 'react';
import { useParams } from 'react-router-dom';
import products from '../products';

export const ProductDes = () => {
  const { id } = useParams();
  const product = products.find((product) => product.id === id);

  if (!product) {
    return <h2 className="text-center mt-5">Product not found</h2>;
  }

  return (
    <div className="container py-5">
      <div className="row align-items-center">
        <div className="col-md-6 mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="img-fluid rounded shadow-sm w-100"
            style={{ maxHeight: '400px', objectFit: 'contain' }}
          />
        </div>

        {/* Right: Product Details */}
        <div className="col-md-6">
          <h2 className="fw-bold mb-3">{product.name}</h2>
          <p className="text-muted mb-3">{product.description}</p>
          <h5 className="text-success mb-3"><strong>Price:</strong> ${product.price}</h5>
          <hr />

          <h6 className="mb-2">Select Quantity</h6>
          <div className="row g-2 mb-4">
            <div className="col-6">
              <select className="form-select">
                {[...Array(product.countInStock).keys()].map((x) => (
                  <option key={x + 1} value={x + 1}>
                    {x + 1}
                  </option>
                ))}
              </select>
            </div>
            <div className="col-6">
              <button className="btn btn-primary w-100">Add to Cart</button>
            </div>
          </div>

          <p className="text-muted">
            <strong>Availability:</strong>{' '}
            {product.countInStock > 0 ? (
              <span className="text-success">In Stock</span>
            ) : (
              <span className="text-danger">Out of Stock</span>
            )}
          </p>
        </div>
      </div>
    </div>
  );
};
