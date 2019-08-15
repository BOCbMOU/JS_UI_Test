import axios from 'axios';
import { error } from 'react-notification-system-redux';

const getComments = id => dispatch => {
   axios
      .get(`/api/v1/media/${id}/comments`)
      .then(response => {
         if (response && response.status === 200) {
            dispatch({
               type: "COMMENTS_SUCCESS",
               payload: { id }
            });
         }
      })
      .catch(err => {
         dispatch(
            error({
               title: "getPosts failed",
               message: err.response.data.error,
               position: "tc"
            })
         );
      });
};

export { getComments };