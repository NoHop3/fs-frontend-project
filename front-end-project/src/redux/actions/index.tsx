//import { Dispatch } from "redux";
import {
  TOGGLE_NAV,
  TOGGLE_THEME,
} from "../../typescript/redux/actions/action_const";
import {
  toggleNavAction,
  toggleThemeAction,
} from "../../typescript/redux/actions/action_types";

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
