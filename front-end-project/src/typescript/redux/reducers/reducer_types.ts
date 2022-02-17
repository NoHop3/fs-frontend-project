import { card } from "../../types";

export type InitialNavState = {
  navClass: string;
  page: string;
};

export type InitialToggleState = {
  lamp: boolean;
};

export type InitialDataState = {
  cards: card[];
  filteredCards: card[];
  favouritedCards: card[];
  inFavs: boolean;
  cardsViewed: number;
  pageNumber: number;
  cardsPerPage: number;
  cardsToDisplay: card[];
  filterByMana: card[];
  manaCrystal: number;
  dataFetched: boolean;
  selectedCard: card;
};

export type InitialDeckState = {
  deck: card[];
};

export type InitialHoverState = {
  isHovering: boolean;
  indexArray: string;
};

//TODO InitialPageState or something to fix the problem with playground links to ABOUT, SKILLS, etc
