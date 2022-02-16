import { useSelector, useDispatch } from "react-redux";
import { useMediaQuery } from "react-responsive";
import { Routes, Route, BrowserRouter, Link } from "react-router-dom";

import { RootState } from "../typescript/redux/store";

export default function useTemplate() {
  const { navClass } = useSelector((state: RootState) => state.navState);
  const { lamp } = useSelector((state: RootState) => state.themeState);
  const { dataFetched } = useSelector((state: RootState) => state.dataState);

  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: `(max-width: 400px)` });
  const isTablet = useMediaQuery({ query: `(max-width: 1200px)` });
  const isLaptop = useMediaQuery({ query: `(max-width:1600px)` });
  const pageBody = navClass + " " + lamp;
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
    dataFetched
  };
}
