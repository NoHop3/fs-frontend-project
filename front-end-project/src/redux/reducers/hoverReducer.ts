import {
  IS_MOUSE_INSIDE_CARD,
  MOUSE_INSIDE_CARD_INDEX,
} from "../../typescript/redux/actions/action_const";
import { actionType } from "../../typescript/redux/actions/action_types";
import { InitialHoverState } from "../../typescript/redux/reducers/reducer_types";

const initialState: InitialHoverState = {
  isHovering: false,
  indexArray: -1,
};

const hoverReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case IS_MOUSE_INSIDE_CARD:
      return {
        ...state,
        isHovering: !state.isHovering,
      };
    case MOUSE_INSIDE_CARD_INDEX:
      return {
        ...state,
        indexArray: action.payload,
      };
    default:
      return state;
  }
};

export default hoverReducer;
