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
  FILTER_BY_SEARCH_KEYWORD,
  ADD_CARD_TO_DECK,
  ADD_CARD_TO_FAVS,
  REMOVE_CARD_FROM_DECK,
  REMOVE_CARD_FROM_FAVS,
  MOUSE_INSIDE_CARD_INDEX,
  IS_MOUSE_INSIDE_CARD,
  GET_FAVS,
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
export type FilterBySearchKeywordAction = {
  type: typeof FILTER_BY_SEARCH_KEYWORD;
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

export type AddCardToDeckAction = {
  type: typeof ADD_CARD_TO_DECK;
  payload: card;
};
export type RemoveCardFromDeckAction = {
  type: typeof REMOVE_CARD_FROM_DECK;
  payload: string;
};

export type AddCardToFavsAction = {
  type: typeof ADD_CARD_TO_FAVS;
  payload: card;
};
export type RemoveCardFromFavsAction = {
  type: typeof REMOVE_CARD_FROM_FAVS;
  payload: string;
};
export type MouseInsideCardIndexAction = {
  type: typeof MOUSE_INSIDE_CARD_INDEX;
  payload: number;
};
export type IsMouseInsideCardAction = {
  type: typeof IS_MOUSE_INSIDE_CARD;
};

export type GetFavsAction = {
  type: typeof GET_FAVS;
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
  | SetDefaultCardsAction
  | FilterBySearchKeywordAction
  | AddCardToDeckAction
  | AddCardToFavsAction
  | RemoveCardFromDeckAction
  | RemoveCardFromFavsAction
  | MouseInsideCardIndexAction
  | IsMouseInsideCardAction
  | GetFavsAction;
