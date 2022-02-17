import { combineReducers } from "redux";
import navReducer from "./navReducer";
import themeReducer from "./themeReducer";
import dataReducer from "./dataReducer";
import cardReducer from "./cardReducer";
import deckReducer from "./deckReducer";
import hoverReducer from "./hoverReducer";
// import favReducer from "./favReducer";

const rootReducer = combineReducers({
  navState: navReducer,
  themeState: themeReducer,
  dataState: dataReducer,
  cardState: cardReducer,
  deckState: deckReducer,
  // favState:favReducer,
  hoverState: hoverReducer,
});

export default rootReducer;
