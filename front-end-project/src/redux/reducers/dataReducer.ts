import {
  FETCH_ALL_DATA,
  FILTER_BY_MANA,
  GO_TO_NEXT_PAGE,
  GO_TO_PREV_PAGE,
  SET_DEFAULT_CARDS,
} from "../../typescript/redux/actions/action_const";
import { actionType } from "../../typescript/redux/actions/action_types";
import { InitialDataState } from "../../typescript/redux/reducers/reducer_types";

const initialState: InitialDataState = {
  cards: [],
  filteredCards: [],
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
        cards: [...action.payload.cards],
        filteredCards: [...action.payload.cards],
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
    case SET_DEFAULT_CARDS:
      return {
        ...state,
        cardsPerPage: action.payload,
      };
    default:
      return state;
  }
};

export default dataReducer;
