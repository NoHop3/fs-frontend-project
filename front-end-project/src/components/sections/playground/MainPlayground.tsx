import "bootstrap/dist/css/bootstrap.min.css";
import { useEffect } from "react";

import Loading from "./Loading";
import { fetchFunc, setDefaultCards } from "../../../redux/actions/actions";
import Collection from "./Collection";
import "../../../styles/Playground.css";
import "../../../styles/FilterCost.css";
import "../../../styles/FilterSearch.css";
import useImports from "../../../hooks/useImports";

export default function MainPlayground() {
  const { dispatch, isLaptop, isMobile, isTablet, data } = useImports();
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
  return <main>{data.dataFetched ? <Collection /> : <Loading />}</main>;
}
