import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { RootState } from "../../typescript/redux/store";

import rootReducer from "../reducers";

function saveToLocalStorage(state: RootState) {
  try {
    const localStorageState = JSON.stringify(state);
    localStorage.setItem("AppState", localStorageState);
  } catch (exception) {
    console.log(exception);
  }
}

const store = () => {
  const middleware = [thunk];
  const reduxStore = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(...middleware))
  );
  reduxStore.subscribe(() => saveToLocalStorage(reduxStore.getState()));
  return reduxStore;
};

export const rootStore = store();
