
  
  // Initial state
  const initialState = {
    articles: [],
    loading: false,
    error: null,
  };
  
  // Reducer function to handle getting all articles
  export const articleListReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'GET_ARTICLES_REQUEST':
        return { ...state, loading: true }; 
  
      case 'GET_ARTICLES_SUCCESS':
        return { loading: false, articles: action.payload }; 
      case 'GET_ARTICLES_FAIL':
        return { loading: false, error: action.payload }; 
      default:
        return state;
    }
  };
  