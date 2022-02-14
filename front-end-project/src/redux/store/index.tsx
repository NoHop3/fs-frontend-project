import { applyMiddleware, createStore } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

import rootReducer from "../reducers";

const store = () => {
  const middleware = [thunk];
  const reduxStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  return reduxStore;
};

export const rootStore = store();
