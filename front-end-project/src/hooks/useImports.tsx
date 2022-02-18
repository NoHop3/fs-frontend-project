import { useCallback } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import {
  AddCardToDeck,
  AddCardToFavs,
  IsCardInDeck,
  IsCardInFavs,
  RemoveCardFromDeck,
  RemoveCardFromFavs,
} from "../redux/actions/actions";
import {
  InitialDataState,
  InitialDeckState,
} from "../typescript/redux/reducers/reducer_types";
import { RootState } from "../typescript/redux/store";
import { evtClickType } from "../typescript/types";

export default function useTemplate() {
  const { navClass } = useSelector((state: RootState) => state.navState);
  const { lamp } = useSelector((state: RootState) => state.themeState);
  const data: InitialDataState = useSelector(
    (state: RootState) => state.dataState
  );
  const { isHovering, indexArray } = useSelector(
    (state: RootState) => state.hoverState
  );
  const deckData: InitialDeckState = useSelector(
    (state: RootState) => state.deckState
  );

  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: `(max-width: 400px)` });
  const isTablet = useMediaQuery({ query: `(max-width: 1200px)` });
  const isLaptop = useMediaQuery({ query: `(max-width:1600px)` });
  const pageBody = navClass + " " + lamp;
  const handleClick = useCallback(
    (evt: evtClickType) => {
      //!!! Helpful
      const element = evt.target as HTMLElement;
      switch (element.className) {
        case "btn addToDeckBtn":
          dispatch(AddCardToDeck(data.selectedCard));
          dispatch(IsCardInDeck(data.selectedCard.id));
          break;
        case "btn addToFavsBtn":
          dispatch(AddCardToFavs(data.selectedCard.id));
          dispatch(IsCardInFavs(data.selectedCard.id));
          break;
        case "btn removeFromDeckBtn":
          dispatch(RemoveCardFromDeck(data.selectedCard.id));
          dispatch(IsCardInDeck(data.selectedCard.id));
          break;
        case "btn removeFromFavsBtn":
          dispatch(RemoveCardFromFavs(data.selectedCard.id));
          dispatch(IsCardInFavs(data.selectedCard.id));
          break;
        default:
          break;
      }
    },
    [data.selectedCard, dispatch]
  );
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
    deckData,
    handleClick,
    isHovering,
    indexArray,
    data,
  };
}
