import axios from 'axios';
import swal from 'sweetalert';

export const registerUser = (user) => async (dispatch) => {
    dispatch({ type: 'USER_REGISTER_REQUEST' })
    console.log(user);
    try {
        const req = await axios.post('/api/users/registeruser', user);
        console.log(req.data['success']);
        if (req.data['success']) {
            dispatch({ type: 'USER_REGISTER_SUCCESS' })
            alert('User Registration Successful. Please Log In to Proceed.');
        }
        else {
            dispatch({ type: 'USER_REGISTER_EMAIL_EXIST', payload: "Email Already in Use." })
        }
    }
    catch (error) {
        dispatch({ type: 'USER_REGISTER_FAIL', payload: error })
        console.log(error);
    }
}

export const loginUser = (user) => async (dispatch, setItem) => {
    dispatch({ type: 'USER_LOGIN_REQUEST' })
    try {
        // console.log(user);
        const res = await axios.post('/api/users/loginuser', user);
        dispatch({ type: 'USER_LOGIN_SUCCESS', payload: res.data })
        console.log(res.data);
        localStorage.setItem('currentUser', JSON.stringify(res.data))
        window.location.href = '/';
        alert('Login Successful.')
    }
    catch (error) {
        console.log('Here', error);
        alert('Invalid Credentials');
        dispatch({ type: 'USER_LOGIN_FAIL', payload: error })
    }
}

export const logoutUser = () => (dispatch, removeItem) => {
    localStorage.removeItem('currentUser');
    window.location.href = '/';
}
export const getAllUsers = () => async (dispatch) => {
    dispatch({ type: 'GET_USERS_REQUEST' })
    try {
        const res = await axios.get('/api/users/getallusers');
        dispatch({ type: 'GET_USERS_SUCCESS', payload: res.data })
    }
    catch (error) {
        dispatch({ type: 'GET_USERS_FAIL', payload: error })
        console.log(error);
    }
}


export const forgotPassword = (email) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_FORGOT_PASSWORD_REQUEST' });

        const { data } = await axios.post('https://pizzeria-back-kmys.onrender.com/api/users/forgot-password', { email });

        dispatch({
            type: 'USER_FORGOT_PASSWORD_SUCCESS',
            payload: data.message,
        });

        window.location.href = `/reset-password/${email}`;
    } catch (error) {
        dispatch({
            type: 'USER_FORGOT_PASSWORD_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

// Reset Password Action
export const resetPassword = (email, password) => async (dispatch) => {
    try {
        dispatch({ type: 'USER_RESET_PASSWORD_REQUEST' });

        const { data } = await axios.post(`/api/users/resetpassword`, { email, password });

        dispatch({
            type: 'USER_RESET_PASSWORD_SUCCESS',
            payload: data.message,
        });

        window.location.href = '/login';

    } catch (error) {
        dispatch({
            type: 'USER_RESET_PASSWORD_FAIL',
            payload: error.response && error.response.data.message
                ? error.response.data.message
                : error.message,
        });
    }
};

export const updateUser = (updatedUser) => async (dispatch) => {
    dispatch({ type: 'UPDATE_USERID_REQUEST' })
    try {
        const res = await axios.post('/api/users/updateuser', { updatedUser })
        console.log(res.data);
        dispatch({ type: 'UPDATE_USERID_SUCCESS' })
        localStorage.setItem('currentUser', JSON.stringify(res.data))
        window.location.href = '/profile';
    }
    catch (err) {
        console.log(err);
        dispatch({ type: 'UPDATE_USERID_FAIL', payload: err['message'] });
    }
}

