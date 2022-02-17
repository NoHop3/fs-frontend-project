import { combineReducers } from "redux";
import navReducer from "./navReducer";
import themeReducer from "./themeReducer";
import dataReducer from "./dataReducer";
import deckReducer from "./deckReducer";
import hoverReducer from "./hoverReducer";

const rootReducer = combineReducers({
  navState: navReducer,
  themeState: themeReducer,
  dataState: dataReducer,
  deckState: deckReducer,
  hoverState: hoverReducer,
});

export default rootReducer;
