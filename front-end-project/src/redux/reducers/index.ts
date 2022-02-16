import { combineReducers } from "redux";
import navReducer from "./navReducer";
import themeReducer from "./themeReducer";
import dataReducer from "./dataReducer";
import cardReducer from "./cardReducer";

const rootReducer = combineReducers({
  navState: navReducer,
  themeState: themeReducer,
  dataState: dataReducer,
  cardState: cardReducer,
});

export default rootReducer;
