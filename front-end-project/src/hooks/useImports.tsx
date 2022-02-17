import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import {
  AddCardToDeck,
  AddCardToFavs,
  RemoveCardFromDeck,
  RemoveCardFromFavs,
} from "../redux/actions/actions";

import { RootState } from "../typescript/redux/store";
import { evtClickType } from "../typescript/types";

export default function useTemplate() {
  const { navClass } = useSelector((state: RootState) => state.navState);
  const { lamp } = useSelector((state: RootState) => state.themeState);
  const { dataFetched, favouritedCards } = useSelector(
    (state: RootState) => state.dataState
  );
  const { isHovering, indexArray } = useSelector(
    (state: RootState) => state.hoverState
  );
  const card = useSelector((state: RootState) => state.cardState);
  const { deck } = useSelector((state: RootState) => state.deckState);

  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: `(max-width: 400px)` });
  const isTablet = useMediaQuery({ query: `(max-width: 1200px)` });
  const isLaptop = useMediaQuery({ query: `(max-width:1600px)` });
  const pageBody = navClass + " " + lamp;
  const handleClick = (evt: evtClickType) => {
    //!!! Helpful
    const element = evt.target as HTMLElement;
    switch (element.className) {
      case "btn addToDeckBtn":
        dispatch(AddCardToDeck(card));
        break;
      case "btn addToFavsBtn":
        dispatch(AddCardToFavs(card));
        break;
      case "btn removeFromDeckBtn":
        dispatch(RemoveCardFromDeck(card.id));
        break;
      case "btn removeFromFavsBtn":
        dispatch(RemoveCardFromFavs(card.id));
        break;
      default:
        break;
    }
  };
  return {
    navClass,
    lamp,
    pageBody,
    Routes,
    Route,
    BrowserRouter,
    Link,
    useSelector,
    dispatch,
    isLaptop,
    isMobile,
    isTablet,
    dataFetched,
    deck,
    favouritedCards,
    handleClick,
    card,
    isHovering,
    indexArray,
  };
}
