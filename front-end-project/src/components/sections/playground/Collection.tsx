import { useDispatch, useSelector } from "react-redux";

import {
  GoToNextPage,
  GoToPrevPage,
  IsMouseInsideCard,
  MouseInsideCard,
} from "../../../redux/actions/actions";
import { InitialDataState } from "../../../typescript/redux/reducers/reducer_types";
import { RootState } from "../../../typescript/redux/store";
import { evtClickType } from "../../../typescript/types";
import CardButtons from "./CardButtons";
import FilterSearch from "./FilterCards";
import FilterCost from "./FilterCost";

export default function Collection() {
  const data: InitialDataState = useSelector(
    (state: RootState) => state.dataState
  );
  const { isHovering, indexArray } = useSelector(
    (state: RootState) => state.hoverState
  );
  const dispatch = useDispatch();

  const showButton = (e: evtClickType, index: string) => {
    e.preventDefault();
    dispatch(IsMouseInsideCard());
    dispatch(MouseInsideCard(index));
  };

  const hideButton = (e: evtClickType) => {
    e.preventDefault();
    dispatch(IsMouseInsideCard());
    dispatch(MouseInsideCard("-1"));
  };
  return (
    <section>
      <FilterSearch />
      <div className='collection'>
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
            <li
              className='collection__list--item'
              key={card.id}
              onMouseEnter={(e) => showButton(e, card.id)}
              onMouseLeave={(e) => hideButton(e)}>
              <img
                style={
                  isHovering && indexArray === card.id
                    ? { opacity: "0.2" }
                    : { opacity: "1" }
                }
                src={`https://art.hearthstonejson.com/v1/render/latest/enUS/256x/${card.id}.png`}
                alt='Hearthstone card'
              />
              < CardButtons
                classProperties={
                  isHovering && indexArray === card.id
                    ? "card_buttons"
                    : "invisible"
                }
                cardId={card.id}
              />
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
      </div>
    </section>
  );
}
