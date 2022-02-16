import { SET_SELECTED_CARD } from "../../typescript/redux/actions/action_const";
import { actionType } from "../../typescript/redux/actions/action_types";
import { InitialCardState } from "../../typescript/redux/reducers/reducer_types";

const initialState: InitialCardState = {
  artist: "",
  attack: 0,
  cardClass: "",
  collectible: false,
  cost: 0,
  dbfId: 0,
  flavor: "",
  health: 0,
  id: "",
  name: "",
  race: "",
  rarity: "",
  set: "",
  spellschool: "",
  cardSet: "",
  text: "",
  type: "",
  mechanics: [],
  referencedTags: [],
};

const dataReducer = (state = initialState, action: actionType) => {
  switch (action.type) {
    case SET_SELECTED_CARD:
      return {
        ...state,
        artist: action.payload.artist,
        attack: action.payload.attack,
        cardClass: action.payload.cardClass,
        collectible: action.payload.collectible,
        cost: action.payload.cost,
        dbfId: action.payload.dbfId,
        flavor: action.payload.flavor,
        health: action.payload.health,
        id: action.payload.id,
        name: action.payload.name,
        race: action.payload.race,
        rarity: action.payload.rarity,
        set: action.payload.set,
        spellschool: action.payload.spellschool,
        cardSet: action.payload.cardSet,
        text: action.payload.text,
        type: action.payload.type,
        mechanics: action.payload.mechanics,
        referencedTags: action.payload.referencedTags,
      };
    default:
      return state;
  }
};

export default dataReducer;
