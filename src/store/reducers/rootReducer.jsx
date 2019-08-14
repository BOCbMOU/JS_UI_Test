import { combineReducers } from "redux";
import { reducer as notifier } from "react-notification-system-redux";

const rootReducer = combineReducers({ notifications: notifier });

export default rootReducer;