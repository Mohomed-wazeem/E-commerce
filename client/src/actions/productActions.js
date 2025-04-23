import axios from 'axios'

export const getAllProducts=() => dispatch=>{

    dispatch({type:'GET_PRODUCTS_REQUEST'})

   axios.get('/api/products/getallproducts')
  .then((res) => {
    console.log(res.data); // <-- make sure this is an array
    dispatch({ type: 'GET_PRODUCTS_SUCCESS', payload: res.data });
  })

      .catch((err) => {
        console.log(err);
        dispatch({type:'GET_PRODUCTS_FAILED' , payload : err})

      });    
}


export const getProductById = (productid) => dispatch => {
    dispatch({ type: 'GET_PRODUCTBYID_REQUEST' });
  
    axios.post('/api/products/getproductbyid', { productid }) // ← wrap in object
      .then((res) => {
        dispatch({ type: 'GET_PRODUCTBYID_SUCCESS', payload: res.data });
      })
      .catch((err) => {
        dispatch({ type: 'GET_PRODUCTBYID_FAILED', payload: err });
      });
  };
  