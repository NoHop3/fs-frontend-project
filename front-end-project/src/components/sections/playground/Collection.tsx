import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useMediaQuery } from "react-responsive";

import {
  fetchFunc,
  GoToNextPage,
  GoToPrevPage,
  setDefaultCards,
} from "../../../redux/actions/actions";
import { InitialDataState } from "../../../typescript/redux/reducers/reducer_types";
import { RootState } from "../../../typescript/redux/store";

export default function Collection() {
  const dispatch = useDispatch();
  const data: InitialDataState = useSelector(
    (state: RootState) => state.dataState
  );
  useEffect(() => {
    dispatch(fetchFunc());
  }, [dispatch]);
  const isMobile = useMediaQuery({ query: `(max-width: 400px)` });
  const isTablet = useMediaQuery({ query: `(max-width: 1200px)` });
  const isLaptop = useMediaQuery({ query: `(max-width:1600px)` });
  useEffect(() => {
    isMobile
      ? dispatch(setDefaultCards(1))
      : isTablet
      ? dispatch(setDefaultCards(9))
      : isLaptop
      ? dispatch(setDefaultCards(10))
      : dispatch(setDefaultCards(12));
  }, [dispatch, isMobile, isTablet, isLaptop]);
  return (
    <section className='collection'>
      <button
        className='prvBtn'
        onClick={() => dispatch(GoToPrevPage())}
        disabled={data.pageNumber === 1}>
        <img
          src='https://img.icons8.com/ios-glyphs/38/000000/skip-to-start--v2.png'
          alt='Previous page button'
        />
      </button>
      <ul className='collection__list'>
        {data.cardsToDisplay.map((card) => (
          <li className='collection__list--item' key={card.id}>
            <img
              src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.id}.png`}
              alt='Hearthstone card'
            />
          </li>
        ))}
      </ul>
      <button
        className='nextBtn'
        onClick={() => dispatch(GoToNextPage())}
        disabled={data.cards.length / data.cardsPerPage <= data.pageNumber}>
        <img
          src='https://img.icons8.com/ios-glyphs/38/000000/end--v2.png'
          alt='Next page button'
        />
      </button>
    </section>
  );
}
