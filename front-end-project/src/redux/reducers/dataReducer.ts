import {
  ADD_CARD_TO_FAVS,
  FETCH_ALL_DATA,
  FILTER_BY_MANA,
  FILTER_BY_SEARCH,
  GET_CARD_BY_ID,
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
  inFavs: false,
  pageNumber: 1,
  cardsPerPage: 10,
  cardsViewed: 0,
  cardsToDisplay: [],
  filterByMana: [],
  manaCrystal: -1,
  dataFetched: false,
  selectedCard: {
    id: "",
    name: "",
    rarity: "",
    text: "",
    type: "",
    cost: -1,
  },
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
        dataFetched: true,
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
        dataFetched: true,
      };
    case GET_CARD_BY_ID:
      return {
        ...state,
        selectedCard: state.filteredCards.find(
          (card) => card.id === action.payload
        ),
      };
    case FILTER_BY_MANA:
      return {
        ...state,
        isInFavs: false,
        pageNumber: 1,
        cardsViewed: 0,
        manaCrystal: state.manaCrystal === action.payload ? -1 : action.payload,
        cardsToDisplay:
          state.manaCrystal !== action.payload
            ? [
                ...state.cards
                  .filter((card) => card.cost === action.payload)
                  .slice(0, state.cardsPerPage),
              ]
            : [...state.cards.slice(0, state.cardsPerPage)],
        filteredCards:
          state.manaCrystal !== action.payload
            ? [...state.cards.filter((card) => card.cost === action.payload)]
            : [...state.cards],
      };
    case FILTER_BY_SEARCH:
      return {
        ...state,
        pageNumber: 1,
        isInFavs: false,
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
    case SET_DEFAULT_CARDS:
      return {
        ...state,
        cardsPerPage: action.payload,
      };
    case ADD_CARD_TO_FAVS:
      return {
        ...state,
        favouritedCards: [
          ...state.favouritedCards,
          state.filteredCards.find((card) => card.id === action.payload),
        ],
      };
    case REMOVE_CARD_FROM_FAVS:
      return {
        ...state,
        favouritedCards: [
          ...state.favouritedCards.filter(
            (card: card) => card.id !== action.payload
          ),
        ],
        cardsToDisplay: state.inFavs
          ? [
              ...state.favouritedCards
                .filter((card: card) => card.id !== action.payload)
                .slice(
                  state.cardsViewed,
                  state.pageNumber * state.cardsPerPage
                ),
            ]
          : [...state.cardsToDisplay],
      };
    case GET_FAVS:
      return {
        ...state,
        inFavs: !state.inFavs,
        filteredCards: !state.inFavs
          ? [...state.favouritedCards]
          : [...state.cards],
        cardsToDisplay: !state.inFavs
          ? [
              ...state.favouritedCards.slice(
                state.cardsViewed,
                state.pageNumber * state.cardsPerPage
              ),
            ]
          : [
              ...state.cards.slice(
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
