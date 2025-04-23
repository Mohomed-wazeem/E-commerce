import { Product } from '../components/Product';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { getAllProducts } from '../actions/productActions';
import { ClipLoader } from 'react-spinners';


export const Home = () => {

  const getallproductsstate = useSelector(state => state.getAllProductsReducer)
  const { loading, products, error } = getallproductsstate;
  const dispatch = useDispatch()

  useEffect(() => {

    dispatch(getAllProducts())
  }, []);

  return (
    <div>
      <div className='row justify-content-center'>

        {loading ? (
          <div className='loader-container'> 
          <h1><ClipLoader /></h1>
          </div>
          ) : error ? (
          <h1>Somthing went wrong</h1>
          ) : (
            products.map(product => (
              <Product key={product._id} product={product} />
            ))
            
          )}

      </div>
    </div>
  );
};

