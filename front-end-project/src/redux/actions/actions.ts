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
  TOGGLE_NAV,
  TOGGLE_THEME,
  MOUSE_INSIDE_CARD_INDEX,
  IS_MOUSE_INSIDE_CARD,
  GET_FAVS,
  GET_CARD_BY_ID,
  IS_CARD_IN_FAVS,
  IS_CARD_IN_DECK,
  SET_PAGE,
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
  toggleNavAction,
  toggleThemeAction,
  MouseInsideCardIndexAction,
  IsMouseInsideCardAction,
  GetFavsAction,
  GetCardByIdAction,
  IsCardInFavsAction,
  IsCardInDeckAction,
  SetPageAction,
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
export function AddCardToDeck(cardElement: card): AddCardToDeckAction {
  return {
    type: ADD_CARD_TO_DECK,
    payload: cardElement,
  };
}
export function AddCardToFavs(cardId: string): AddCardToFavsAction {
  return {
    type: ADD_CARD_TO_FAVS,
    payload: cardId,
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
export function MouseInsideCard(i: string): MouseInsideCardIndexAction {
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
export function GetCardById(id: string): GetCardByIdAction {
  return {
    type: GET_CARD_BY_ID,
    payload: id,
  };
}
export function IsCardInFavs(id: string): IsCardInFavsAction {
  return {
    type: IS_CARD_IN_FAVS,
    payload: id,
  };
}
export function IsCardInDeck(id: string): IsCardInDeckAction {
  return {
    type: IS_CARD_IN_DECK,
    payload: id,
  };
}
export function SetPage(pageName: string): SetPageAction {
  return {
    type: SET_PAGE,
    payload: pageName,
  };
}

export function fetchFunc() {
  return (dispatch: Dispatch) => {
    fetch(
      "https://api.hearthstonejson.com/v1/121569/enUS/cards.collectible.json"
    )
      .then((response) => response.json())
      .then((data) => {
        dispatch(fetchAllData(data));
      })
      .catch((err: string) => {
        console.error(err);
      });
  };
}
