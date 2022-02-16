import { card } from "../../types";

export type InitialNavState = {
  navClass: string;
};

export type InitialToggleState = {
  lamp: boolean;
};

export type InitialDataState = {
  cards: card[];
  filteredCards: card[];
  cardsViewed: number;
  pageNumber: number;
  cardsPerPage: number;
  cardsToDisplay: card[];
  filterByMana: card[];
  dataFetched: boolean;
};

export type InitialCardState = card;

//TODO InitialPageState or something to fix the problem with playground links to ABOUT, SKILLS, etc
