import { card } from "../../types";

export type InitialNavState = {
  navClass: string;
};

export type InitialToggleState = {
  lamp: boolean;
};

export type InitialDataState = {
  cards: card[];
  cardsViewed: number;
  pageNumber:number;
  cardsPerPage: number;
  cardsToDisplay: card[];
};

export type InitialFilterState = {
  mana: number;
  class: string;
  keyword: string;
};

//TODO InitialPageState or something to fix the problem with playground links to ABOUT, SKILLS, etc
