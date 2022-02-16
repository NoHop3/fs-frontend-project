import { useDispatch, useSelector } from "react-redux";

import { GoToNextPage, GoToPrevPage } from "../../../redux/actions/actions";
import { InitialDataState } from "../../../typescript/redux/reducers/reducer_types";
import { RootState } from "../../../typescript/redux/store";
import FilterCost from "./FilterCost";
// import SingleCard from "./SingleCard";

export default function Collection() {
  const data: InitialDataState = useSelector(
    (state: RootState) => state.dataState
  );
  const dispatch = useDispatch();
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
            <button
              className='cardBtn'
              onClick={() => {
                // <SingleCard singleCard={card}/>
              }}>
              <img
                src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.id}.png`}
                alt='Hearthstone card'
              />
            </button>
          </li>
        ))}
      </ul>
      <button
        className='nextBtn'
        onClick={() => dispatch(GoToNextPage())}
        disabled={
          data.filteredCards.length / data.cardsPerPage <= data.pageNumber + 1
        }>
        <img
          src='https://img.icons8.com/ios-glyphs/38/000000/end--v2.png'
          alt='Next page button'
        />
      </button>
      <FilterCost />
    </section>
  );
}
