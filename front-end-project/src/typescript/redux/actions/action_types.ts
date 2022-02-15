import {
  FETCH_ALL_DATA,
  TOGGLE_NAV,
  TOGGLE_THEME,
  GO_TO_NEXT_PAGE,
  GO_TO_PREV_PAGE,
  FILTER_BY_CLASS,
  FILTER_BY_MANA,
  FILTER_BY_SEARCH,
  SET_DEFAULT_CARDS,
} from "./action_const";

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

export type GoToNextPageAction = {
  type: typeof GO_TO_NEXT_PAGE;
};

export type GoToPrevPageAction = {
  type: typeof GO_TO_PREV_PAGE;
};

export type FilterByManaAction = {
  type: typeof FILTER_BY_MANA;
  payload: number;
};

export type FilterByClassAction = {
  type: typeof FILTER_BY_CLASS;
  payload: string;
};

export type FilterBySearchAction = {
  type: typeof FILTER_BY_SEARCH;
  payload: string;
};

export type SetDefaultCardsAction = {
  type: typeof SET_DEFAULT_CARDS;
  payload: number;
};

export type actionType =
  | toggleNavAction
  | toggleThemeAction
  | fetchAllDataAction
  | GoToNextPageAction
  | GoToPrevPageAction
  | FilterByManaAction
  | FilterBySearchAction
  | FilterByClassAction
  | SetDefaultCardsAction;
