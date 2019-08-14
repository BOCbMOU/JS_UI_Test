import axios from "axios";

const getPostsList = async dispatch => {
  const result = await axios.get("/api/v1/media/");
  
  if (result && result.status === 200) {
    const { payload } = result.body;
    dispatch({
      type: "GET_POST_LIST",
      payload
    });
  }
};

export { getPostsList };