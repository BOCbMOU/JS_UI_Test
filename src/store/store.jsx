import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/';

export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

const savedUser = localStorage.getItem('user');
if(savedUser) {
    axios.defaults.headers.common['Authorization'] = savedUser;

    store.dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { token: savedUser },
    });
}

export default store;