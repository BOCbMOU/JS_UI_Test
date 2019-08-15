import axios from 'axios';
import { error } from 'react-notification-system-redux';

const getSelf = token => dispatch => {
    axios
        .get("/api/v1/users/self", {
            headers: {
                Authorization: "Bearer " + token
            }
        })
        .then(response => {
            if (response && response.status === 200) {
                const { payload } = response.data;
                dispatch({
                    type: "GET_USER_INFO",
                    payload
                });
            }
        })
        .catch(err => {
            dispatch(
                error({
                    title: "Get self failed",
                    message: err.response.data.error,
                    position: "tc"
                })
            );
        });
};

export { getSelf };