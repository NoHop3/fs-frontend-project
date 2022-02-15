import { FETCH_ALL_DATA, TOGGLE_NAV, TOGGLE_THEME } from "./action_const";

export type toggleThemeAction = {
  type: typeof TOGGLE_THEME;
};

export type toggleNavAction = {
  type: typeof TOGGLE_NAV;
};

export type fetchAllDataAction = {
  type: typeof FETCH_ALL_DATA;
  payload: any;
};

export type actionType =
  | toggleNavAction
  | toggleThemeAction
  | fetchAllDataAction;
