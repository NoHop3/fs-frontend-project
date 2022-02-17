import {
  ADD_CARD_TO_DECK,
  REMOVE_CARD_FROM_DECK,
} from "../../typescript/redux/actions/action_const";
import { actionType } from "../../typescript/redux/actions/action_types";
import { InitialDeckState } from "../../typescript/redux/reducers/reducer_types";
import { card } from "../../typescript/types";

const initialState: InitialDeckState = {
  deck: [],
};

const deckReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case ADD_CARD_TO_DECK:
      return {
        ...state,
        deck: [...state.deck, action.payload],
      };
    case REMOVE_CARD_FROM_DECK:
      return {
        ...state,
        deck: [
          ...state.deck.filter((card: card) => card.id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default deckReducer;
