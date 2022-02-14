import { InitialToggleState } from "../../typescript/redux/reducers/reducer_types";
import { actionType } from "../../typescript/redux/actions/action_types";
import { TOGGLE_THEME } from "../../typescript/redux/actions/action_const";

const initialState: InitialToggleState = {
  theme: "light",
};

const themeReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case TOGGLE_THEME:
      return {
        ...state,
        class: (state.theme = "light" ? "dark" : "light"),
      };
    default:
      return state;
  }
};

export default themeReducer;
