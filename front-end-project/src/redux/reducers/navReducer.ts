import { InitialNavState } from "../../typescript/redux/reducers/reducer_types";
import { actionType } from "../../typescript/redux/actions/action_types";
import { TOGGLE_NAV } from "../../typescript/redux/actions/action_const";

const initialState: InitialNavState = {
  navClass: "wapper",
};

const navReducer = (state = initialState, action: actionType) => {
  //TODO fix the rendering
  console.log(state);
  switch (action.type) {
    case TOGGLE_NAV:
      return {
        ...state,
        navClass: state.navClass === "wapper" ? "nav-open" : "wapper",
      };
    default:
      return state;
  }
};

export default navReducer;
