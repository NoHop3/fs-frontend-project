import { card } from "../../types";
import {
  FETCH_ALL_DATA,
  TOGGLE_NAV,
  TOGGLE_THEME,
  GO_TO_NEXT_PAGE,
  GO_TO_PREV_PAGE,
  FILTER_BY_MANA,
  FILTER_BY_SEARCH,
  SET_DEFAULT_CARDS,
  SET_SELECTED_CARD,
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

export type FilterBySearchAction = {
  type: typeof FILTER_BY_SEARCH;
  payload: string;
};

export type SetDefaultCardsAction = {
  type: typeof SET_DEFAULT_CARDS;
  payload: number;
};

export type SetSelectedCardAction = {
  type: typeof SET_SELECTED_CARD;
  payload: card;
};

export type actionType =
  | toggleNavAction
  | toggleThemeAction
  | fetchAllDataAction
  | GoToNextPageAction
  | GoToPrevPageAction
  | FilterByManaAction
  | FilterBySearchAction
  | SetSelectedCardAction
  | SetDefaultCardsAction;
