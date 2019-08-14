import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import isRegistered from './registration';
import user from './user';

const rootReducer = combineReducers({ notifications, isRegistered, user });

export default rootReducer;