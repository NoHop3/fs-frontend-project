import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import { InitialDataState } from "../../typescript/redux/reducers/reducer_types";

import rootReducer from "../reducers";

// function saveToLocalStorage(state: InitialToggleState) {
//   try {
//     const localStorageState = JSON.stringify(state);
//     localStorage.setItem("AppState", localStorageState);
//   } catch (exception) {
//     console.log(exception);
//   }
// }

// function loadFromLocalStorage() {
//   const localStorageState = localStorage.getItem("AppState");
//   if (localStorageState === null) return undefined;
//   return JSON.parse(localStorageState);
// }

const store = () => {
  const middleware = [thunk];
  const reduxStore = createStore(
    rootReducer,
    // loadFromLocalStorage(),
    composeWithDevTools(applyMiddleware(...middleware))
  );
  window.onbeforeunload = () => {
    const { lamp } = reduxStore.getState().themeState;
    const favData: InitialDataState = reduxStore.getState().dataState;
    const { deck } = reduxStore.getState().deckState;
    const { page } = reduxStore.getState().navState;
    localStorage.setItem("lamp", JSON.stringify(lamp));
    localStorage.setItem("favs", JSON.stringify(favData.favouritedCards));
    localStorage.setItem("deck", JSON.stringify(deck));
    localStorage.setItem("page", JSON.stringify(page));
    // saveToLocalStorage(reduxStore.getState().themeState);
  };
  return reduxStore;
};

export const rootStore = store();
