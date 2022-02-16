import "bootstrap/dist/css/bootstrap.min.css";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { useMediaQuery } from "react-responsive";

import Loading from "./Loading";
import { fetchFunc, setDefaultCards } from "../../../redux/actions/actions";
import Collection from "./Collection";
import "../../../styles/Playground.css";
import "../../../styles/FilterCost.css";
import { RootState } from "../../../typescript/redux/store";

export default function MainPlayground() {
  const { dataFetched } = useSelector((state: RootState) => state.dataState);
  const dispatch = useDispatch();
  const isMobile = useMediaQuery({ query: `(max-width: 400px)` });
  const isTablet = useMediaQuery({ query: `(max-width: 1200px)` });
  const isLaptop = useMediaQuery({ query: `(max-width:1600px)` });
  useEffect(() => {
    dispatch(fetchFunc());
    isMobile
      ? dispatch(setDefaultCards(1))
      : isTablet
      ? dispatch(setDefaultCards(9))
      : isLaptop
      ? dispatch(setDefaultCards(10))
      : dispatch(setDefaultCards(12));
  }, [dispatch, isMobile, isTablet, isLaptop]);
  return <main>{dataFetched ? <Collection /> : <Loading />}</main>;
}
