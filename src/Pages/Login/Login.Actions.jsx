import axios from 'axios';
import { success, error } from 'react-notification-system-redux';

const loginUser = user => dispatch => {
   axios
      .post("/api/v1/auth/session", user)
      .then(response => {
         if (response && response.status === 200) {
            const { token } = response.data.payload;
            localStorage.setItem("user", token);
            dispatch({
               type: "LOGIN_SUCCESS",
               payload: { token }
            });
            dispatch(
               success({
                  title: "Login success",
                  position: "tc",
                  autoDismiss: 5
               })
            );
         }
      })
      .catch(err => {
         dispatch(
            error({
               title: "Auth failed. Check your email or password.",
               message: err.response.data.error,
               position: "tc"
            })
         );
      });
};

export { loginUser };