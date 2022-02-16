import { Dispatch } from "redux";

import {
  FETCH_ALL_DATA,
  FILTER_BY_MANA,
  FILTER_BY_SEARCH,
  GO_TO_NEXT_PAGE,
  GO_TO_PREV_PAGE,
  SET_DEFAULT_CARDS,
  SET_SELECTED_CARD,
  TOGGLE_NAV,
  TOGGLE_THEME,
} from "../../typescript/redux/actions/action_const";
import {
  fetchAllDataAction,
  GoToNextPageAction,
  GoToPrevPageAction,
  SetDefaultCardsAction,
  SetSelectedCardAction,
  toggleNavAction,
  toggleThemeAction,
} from "../../typescript/redux/actions/action_types";
import { card } from "../../typescript/types";

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

export function fetchAllData(cards: card[]): fetchAllDataAction {
  return {
    type: FETCH_ALL_DATA,
    payload: {
      cards,
    },
  };
}
export function setDefaultCards(numberOfCards: number): SetDefaultCardsAction {
  return {
    type: SET_DEFAULT_CARDS,
    payload: numberOfCards,
  };
}
export function setSelectedCard(selectedCard: card): SetSelectedCardAction {
  return {
    type: SET_SELECTED_CARD,
    payload: selectedCard,
  };
}

export function GoToNextPage(): GoToNextPageAction {
  return {
    type: GO_TO_NEXT_PAGE,
  };
}
export function GoToPrevPage(): GoToPrevPageAction {
  return {
    type: GO_TO_PREV_PAGE,
  };
}

export function FilterByMana(mana: number) {
  return {
    type: FILTER_BY_MANA,
    payload: mana,
  };
}

export function FilterBySearch(keyword: string) {
  return {
    type: FILTER_BY_SEARCH,
    payload: keyword,
  };
}

export function fetchFunc() {
  return (dispatch: Dispatch) => {
    fetch(
      "https://api.hearthstonejson.com/v1/121569/enUS/cards.collectible.json"
    )
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        dispatch(fetchAllData(data));
      })
      .catch((err: string) => {
        console.error(err);
      });
  };
}
