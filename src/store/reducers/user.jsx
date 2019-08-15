const user = (state = {}, action) => {
    switch (action.type) {
        case "LOGIN_SUCCESS":
            return action.payload;
        case "GET_USER_INFO":
            return { ...state, info: action.payload };
        case "LOGOUT":
            return {};
        default:
            return state;
    }
}

export default user;