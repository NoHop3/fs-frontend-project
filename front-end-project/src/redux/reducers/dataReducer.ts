import { FETCH_ALL_DATA } from "../../typescript/redux/actions/action_const";
import { actionType } from "../../typescript/redux/actions/action_types";
import { InitialDataState } from "../../typescript/redux/reducers/reducer_types";

const initialState: InitialDataState = {
  Classic: [],
  Naxxramas: [],
  "Goblins vs Gnomes": [],
  "Blackrock Mountain": [],
  "The Grand Tournament": [],
  "The League of Explorers": [],
  "Whispers of the Old Gods": [],
  "One Night in Karazhan": [],
  "Mean Streets of Gadgetzan": [],
  "Journey to Un'Goro": [],
  "Knights of the Frozen Throne": [],
  "Kobolds & Catacombs": [],
  "The Witchwood": [],
  "The Boomsday Project": [],
  "Rastakhan's Rumble": [],
  "Rise of Shadows": [],
  "Saviors of Uldum": [],
  "Descent of Dragons": [],
  "Galakrond's Awakening": [],
  "Ashes of Outland": [],
  "Scholomance Academy": [],
  "Demon Hunter Initiate": [],
  "Madness At The Darkmoon Faire": [],
  "Forged in the Barrens": [],
  Core: [],
  "United in Stormwind": [],
  "Fractured in Alterac Valley": [],
};

const dataReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case FETCH_ALL_DATA:
      return {
        ...state,
        Classic: [...action.payload["Classic"]],
        Naxxramas: [...action.payload["Naxxramas"]],
        "Goblins vs Gnomes": [...action.payload["Goblins vs Gnomes"]],
        "Blackrock Mountain": [...action.payload["Blackrock Mountain"]],
        "The Grand Tournament": [...action.payload["The Grand Tournament"]],
        "The League of Explorers": [
          ...action.payload["The League of Explorers"],
        ],
        "Whispers of the Old Gods": [
          ...action.payload["Whispers of the Old Gods"],
        ],
        "One Night in Karazhan": [...action.payload["One Night in Karazhan"]],
        "Mean Streets of Gadgetzan": [
          ...action.payload["Mean Streets of Gadgetzan"],
        ],
        "Journey to Un'Goro": [...action.payload["Journey to Un'Goro"]],
        "Knights of the Frozen Throne": [
          ...action.payload["Knights of the Frozen Throne"],
        ],
        "Kobolds & Catacombs": [...action.payload["Kobolds & Catacombs"]],
        "The Witchwood": [...action.payload["The Witchwood"]],
        "The Boomsday Project": [...action.payload["The Boomsday Project"]],
        "Rastakhan's Rumble": [...action.payload["Rastakhan's Rumble"]],
        "Rise of Shadows": [...action.payload["Rise of Shadows"]],
        "Saviors of Uldum": [...action.payload["Saviors of Uldum"]],
        "Descent of Dragons": [...action.payload["Descent of Dragons"]],
        "Galakrond's Awakening": [...action.payload["Galakrond's Awakening"]],
        "Ashes of Outland": [...action.payload["Ashes of Outland"]],
        "Scholomance Academy": [...action.payload["Scholomance Academy"]],
        "Demon Hunter Initiate": [...action.payload["Demon Hunter Initiate"]],
        "Madness At The Darkmoon Faire": [
          ...action.payload["Madness At The Darkmoon Faire"],
        ],
        "Forged in the Barrens": [...action.payload["Forged in the Barrens"]],
        Core: [...action.payload["Core"]],
        "United in Stormwind": [...action.payload["United in Stormwind"]],
        "Fractured in Alterac Valley": [
          ...action.payload["Fractured in Alterac Valley"],
        ],
      };
    default:
      return state;
  }
};

export default dataReducer;
