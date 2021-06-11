import { combineReducers } from "redux";
import authentication from "./auth";
import updateProfile from "./profile";

const rootReducer = combineReducers({
  authentication,
  updateProfile,
});

export default rootReducer;