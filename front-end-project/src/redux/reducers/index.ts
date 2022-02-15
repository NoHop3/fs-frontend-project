import { combineReducers } from "redux";
import navReducer from "./navReducer";
import themeReducer from "./themeReducer";
import dataReducer from "./dataReducer";

const rootReducer = combineReducers({
  navState: navReducer,
  themeState: themeReducer,
  dataState: dataReducer,
});

export default rootReducer;
