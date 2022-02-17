import { Dispatch } from "redux";

import {
  ADD_CARD_TO_DECK,
  ADD_CARD_TO_FAVS,
  FETCH_ALL_DATA,
  FILTER_BY_MANA,
  FILTER_BY_SEARCH,
  FILTER_BY_SEARCH_KEYWORD,
  GO_TO_NEXT_PAGE,
  GO_TO_PREV_PAGE,
  REMOVE_CARD_FROM_DECK,
  REMOVE_CARD_FROM_FAVS,
  SET_DEFAULT_CARDS,
  SET_SELECTED_CARD,
  TOGGLE_NAV,
  TOGGLE_THEME,
  MOUSE_INSIDE_CARD_INDEX,
  IS_MOUSE_INSIDE_CARD,
  GET_FAVS,
} from "../../typescript/redux/actions/action_const";
import {
  AddCardToDeckAction,
  AddCardToFavsAction,
  fetchAllDataAction,
  FilterByManaAction,
  FilterBySearchAction,
  FilterBySearchKeywordAction,
  GoToNextPageAction,
  GoToPrevPageAction,
  RemoveCardFromDeckAction,
  RemoveCardFromFavsAction,
  SetDefaultCardsAction,
  SetSelectedCardAction,
  toggleNavAction,
  toggleThemeAction,
  MouseInsideCardIndexAction,
  IsMouseInsideCardAction,
  GetFavsAction,
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

export function FilterByMana(mana: number): FilterByManaAction {
  return {
    type: FILTER_BY_MANA,
    payload: mana,
  };
}

export function FilterBySearch(letter: string): FilterBySearchAction {
  return {
    type: FILTER_BY_SEARCH,
    payload: letter,
  };
}
export function FilterBySearchKeyword(
  keyword: string
): FilterBySearchKeywordAction {
  return {
    type: FILTER_BY_SEARCH_KEYWORD,
    payload: keyword,
  };
}
export function AddCardToDeck(card: card): AddCardToDeckAction {
  return {
    type: ADD_CARD_TO_DECK,
    payload: card,
  };
}
export function AddCardToFavs(card: card): AddCardToFavsAction {
  return {
    type: ADD_CARD_TO_FAVS,
    payload: card,
  };
}
export function RemoveCardFromDeck(id: string): RemoveCardFromDeckAction {
  return {
    type: REMOVE_CARD_FROM_DECK,
    payload: id,
  };
}
export function RemoveCardFromFavs(id: string): RemoveCardFromFavsAction {
  return {
    type: REMOVE_CARD_FROM_FAVS,
    payload: id,
  };
}
export function MouseInsideCard(i: number): MouseInsideCardIndexAction {
  return {
    type: MOUSE_INSIDE_CARD_INDEX,
    payload: i,
  };
}
export function IsMouseInsideCard(): IsMouseInsideCardAction {
  return {
    type: IS_MOUSE_INSIDE_CARD,
  };
}
export function GetFavsArray(): GetFavsAction {
  return {
    type: GET_FAVS,
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
