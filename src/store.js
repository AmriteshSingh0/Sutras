import { createStore, combineReducers, applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk'
import { composeWithDevTools } from '@redux-devtools/extension'
import { articleListReducer } from './reducers/articleReducer';
import { loginUserReducer, registerUserReducer, getAllUsersReducer, userForgotPasswordReducer, userResetPasswordReducer, updateUserReducer } from './reducers/userReducer';

const currentUser = localStorage.getItem('currentUser') ? JSON.parse(localStorage.getItem('currentUser')) : null;

const rootReducer = combineReducers({
    articleListReducer: articleListReducer,
    loginUserReducer: loginUserReducer,
    registerUserReducer:registerUserReducer,
    getAllUsersReducer: getAllUsersReducer,
    userForgotPassword: userForgotPasswordReducer,
    userResetPassword: userResetPasswordReducer,
    updateUserReducer: updateUserReducer
})

const initialState = {
    loginUserReducer: {
        currentUser: currentUser
    }
}

const middleware = [thunk]

const store = createStore(
    rootReducer,
    initialState,
    composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
