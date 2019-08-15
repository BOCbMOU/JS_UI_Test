import { applyMiddleware, createStore } from 'redux';
import axios from 'axios';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/';
import { error as errorNotification } from 'react-notification-system-redux';

export const store = createStore(
    rootReducer, 
    composeWithDevTools(applyMiddleware(thunk))
);

axios.interceptors.response.use(
    response => response,
    error => {
      let message,
        title = "Something went wrong";
  
      if (error.response.status === 401) {
        localStorage.removeItem("user");
        store.dispatch({
          type: "LOGOUT"
        });
        message = error.response.data.error;
        title = "Session ended";
      }
  
      store.dispatch(
        errorNotification({
          title,
          message,
          position: "tc"
        })
      );
    }
  );

const token = localStorage.getItem('user');
if(token) {
    store.dispatch({
        type: 'LOGIN_SUCCESS',
        payload: { token },
    });
}

export default store;