import { combineReducers } from "redux";
import { reducer as notifications } from "react-notification-system-redux";
import isRegistered from './registration';
import user from './user';
import getPostsList from './getPostsList';

const rootReducer = combineReducers({ notifications, isRegistered, user, getPostsList });

export default rootReducer;