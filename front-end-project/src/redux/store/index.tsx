import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { RootState } from "../../typescript/redux/store";

import rootReducer from "../reducers";

function saveToLocalStorage(state: RootState) {
  try {
    const localStorageState = JSON.stringify(state);
    localStorage.setItem("store", localStorageState);
  } catch (exception) {
    console.log(exception);
  }
}

function loadFromLocalStorage() {
  const localStorageState = localStorage.getItem("store");
  if (localStorageState === null) return undefined;
  return JSON.parse(localStorageState);
}

const store = () => {
  const middleware = [thunk];
  const reduxStore = createStore(
    rootReducer,
    loadFromLocalStorage(),
    composeWithDevTools(applyMiddleware(...middleware))
  );
  window.onbeforeunload = () => {
    saveToLocalStorage(reduxStore.getState());
  };
  return reduxStore;
};

export const rootStore = store();
