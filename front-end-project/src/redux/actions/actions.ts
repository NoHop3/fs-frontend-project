import { Dispatch } from "redux";

import {
  FETCH_ALL_DATA,
  TOGGLE_NAV,
  TOGGLE_THEME,
} from "../../typescript/redux/actions/action_const";
import {
  fetchAllDataAction,
  toggleNavAction,
  toggleThemeAction,
} from "../../typescript/redux/actions/action_types";

export function toggleTheme(): toggleThemeAction {
  return {
    type: TOGGLE_THEME,
  };
}

export function toggleNav(): toggleNavAction {
  return {
    type: TOGGLE_NAV,
  };
}

export function fetchAllData(data: any): fetchAllDataAction {
  return {
    type: FETCH_ALL_DATA,
    payload: data,
  };
}
export function fetchFunc() {
  return (dispatch: Dispatch) => {
    fetch("https://omgvamp-hearthstone-v1.p.rapidapi.com/cards", {
      method: "GET",
      headers: {
        "x-rapidapi-host": "omgvamp-hearthstone-v1.p.rapidapi.com",
        "x-rapidapi-key": `${process.env.REACT_APP_API_KEY}`,
      },
    })
      .then((response) => response.json())
      .then((data) => dispatch(fetchAllData(data)))
      .catch((err: string) => {
        console.error(err);
      });
  };
}
