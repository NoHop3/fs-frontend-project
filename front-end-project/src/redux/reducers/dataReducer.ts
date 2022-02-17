import {
  ADD_CARD_TO_FAVS,
  FETCH_ALL_DATA,
  FILTER_BY_MANA,
  FILTER_BY_SEARCH,
  FILTER_BY_SEARCH_KEYWORD,
  GET_FAVS,
  GO_TO_NEXT_PAGE,
  GO_TO_PREV_PAGE,
  REMOVE_CARD_FROM_FAVS,
  SET_DEFAULT_CARDS,
} from "../../typescript/redux/actions/action_const";
import { actionType } from "../../typescript/redux/actions/action_types";
import { InitialDataState } from "../../typescript/redux/reducers/reducer_types";
import { card } from "../../typescript/types";

const initialState: InitialDataState = {
  cards: [],
  filteredCards: [],
  favouritedCards: [],
  pageNumber: 1,
  cardsPerPage: 10,
  cardsViewed: 0,
  cardsToDisplay: [],
  filterByMana: [],
  dataFetched: false,
};

const dataReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case FETCH_ALL_DATA:
      return {
        ...state,
        cards: [
          ...action.payload.cards.filter((card: card) => card.type !== "HERO"),
        ],
        filteredCards: [
          ...action.payload.cards.filter((card: card) => card.type !== "HERO"),
        ],
        cardsToDisplay: [
          ...action.payload.cards.slice(
            state.cardsViewed,
            state.pageNumber * state.cardsPerPage
          ),
        ],
        dataFetched: true,
      };
    case GO_TO_NEXT_PAGE:
      return {
        ...state,
        pageNumber: state.pageNumber + 1,
        cardsViewed: (state.pageNumber + 1) * state.cardsPerPage,
        cardsToDisplay: [
          ...state.filteredCards.slice(
            (state.pageNumber + 1) * state.cardsPerPage,
            (state.pageNumber + 2) * state.cardsPerPage
          ),
        ],
      };
    case GO_TO_PREV_PAGE:
      return {
        ...state,
        pageNumber: state.pageNumber - 1,
        cardsViewed: (state.pageNumber - 1) * state.cardsPerPage,
        cardsToDisplay: [
          ...state.filteredCards.slice(
            (state.pageNumber - 2) * state.cardsPerPage,
            (state.pageNumber - 1) * state.cardsPerPage
          ),
        ],
      };
    case FILTER_BY_MANA:
      return {
        ...state,
        pageNumber: 1,
        cardsViewed: 0,
        filteredCards: [
          ...state.cards.filter((card) => card.cost === action.payload),
        ],
        cardsToDisplay: [
          ...state.cards
            .filter((card) => card.cost === action.payload)
            .slice(0, state.cardsPerPage),
        ],
      };
    case FILTER_BY_SEARCH:
      return {
        ...state,
        pageNumber: 1,
        cardsViewed: 0,
        filteredCards: [
          ...state.cards.filter(
            (card) =>
              card.name
                .toLocaleLowerCase()
                .search(action.payload.toLocaleLowerCase()) !== -1
          ),
        ],
        cardsToDisplay: [
          ...state.cards
            .filter(
              (card) =>
                card.name
                  .toLocaleLowerCase()
                  .search(action.payload.toLocaleLowerCase()) !== -1
            )

            .slice(0, state.cardsPerPage),
        ],
      };
    case FILTER_BY_SEARCH_KEYWORD:
      return {
        ...state,
        pageNumber: 1,
        cardsViewed: 0,
        filteredCards: [
          ...state.cards.filter((card) =>
            action.payload === "rarity"
              ? card.rarity
                  .toLocaleLowerCase()
                  .search(action.payload.toLocaleLowerCase()) !== -1
              : card.type
                  .toLocaleLowerCase()
                  .search(action.payload.toLocaleLowerCase()) !== -1
          ),
        ],
        cardsToDisplay: [
          ...state.cards
            .filter((card) =>
              action.payload === "rarity"
                ? card.rarity
                    .toLocaleLowerCase()
                    .search(action.payload.toLocaleLowerCase()) !== -1
                : card.type
                    .toLocaleLowerCase()
                    .search(action.payload.toLocaleLowerCase()) !== -1
            )
            .slice(0, state.cardsPerPage),
        ],
      };
    case SET_DEFAULT_CARDS:
      return {
        ...state,
        cardsPerPage: action.payload,
      };
    case ADD_CARD_TO_FAVS:
      return {
        ...state,
        favouritedCards: [...state.favouritedCards, action.payload],
      };
    case REMOVE_CARD_FROM_FAVS:
      return {
        ...state,
        favouritedCards: [
          ...state.favouritedCards.filter(
            (card: card) => card.id !== action.payload
          ),
        ],
      };
    case GET_FAVS:
      return {
        ...state,
        filteredCards: [...state.favouritedCards],
        cardsToDisplay: [
          ...state.favouritedCards.slice(
            state.cardsViewed,
            state.pageNumber * state.cardsPerPage
          ),
        ],
      };
    default:
      return state;
  }
};

export default dataReducer;
