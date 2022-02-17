import { InitialNavState } from "../../typescript/redux/reducers/reducer_types";
import { actionType } from "../../typescript/redux/actions/action_types";
import { TOGGLE_NAV } from "../../typescript/redux/actions/action_const";

const initialState: InitialNavState = {
  navClass: "wapper",
  page: JSON.parse(localStorage.getItem("page")!),
};

const navReducer = (state = initialState, action: actionType) => {
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
