const user = (state = {}, action) => {
    if(action.type === 'LOGIN_SUCCESS') {
        return action.payload;
    }
    return state;
}

export default user;