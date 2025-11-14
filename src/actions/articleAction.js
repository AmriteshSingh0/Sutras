import axios from 'axios';


export const getAllArticles = () => async (dispatch) => {
  try {
    dispatch({ type: 'GET_ARTICLES_REQUEST' });

    const { data } = await axios.get('/api/articles/getallarticles');

    dispatch({
      type: 'GET_ARTICLES_SUCCESS',
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: 'GET_ARTICLES_FAIL',
      payload: error.response && error.response.data.message
        ? error.response.data.message
        : error.message,
    });
  }
};
