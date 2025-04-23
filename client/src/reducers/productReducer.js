const initialState = {
    products: [],
    loading: false,
    error: null
  };
  
  export const getAllProductsReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_PRODUCTS_REQUEST':
        return { ...state, loading: true };
      case 'GET_PRODUCTS_SUCCESS':
        return { ...state, loading: false, products: action.payload };
      case 'GET_PRODUCTS_FAILED':
        return { ...state, loading: false, error: action.payload };
      default:
        return state;
    }
  };
  


export const getProductByIdReducer=(state={product : []},action)=>{
    
    switch(action.type)
    {
        case 'GET_PRODUCTBYID_REQUEST' : return {
            loading : true
        }
        case 'GET_PRODUCTBYID_SUCCESS' : return {
            product : action.payload,
            loading : false
        }
        case 'GET_PRODUCTBYID_FAILED' : return {
            error : action.payload,
            loading : false
        }
        default : return state
    }
}

