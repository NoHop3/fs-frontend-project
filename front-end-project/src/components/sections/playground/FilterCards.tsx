import { memo, useCallback } from "react";

import useTemplate from "../../../hooks/useImports";
import { FilterBySearch, GetFavsArray } from "../../../redux/actions/actions";
import { evtChangeType } from "../../../typescript/types";

function Filter() {
  //!!!Not fully optimized
  const { dispatch, deckData, data } = useTemplate();
  const handleClick = useCallback(() => {
    dispatch(GetFavsArray());
  }, [dispatch]);
  const handleChangeLetter = useCallback(
    (evt: evtChangeType) => {
      dispatch(FilterBySearch(evt.target.value));
    },
    [dispatch]
  );
  console.log("FILTER SEARCG IS RENDERING");
  return (
    <div className='filter_cards'>
      <div className='searchBar'>
        <input
          type='text'
          name='search'
          id='search'
          onChange={handleChangeLetter}
        />
        <label htmlFor='search'>Search</label>
      </div>
      <div className='favourites'>
        <button className='submitBtn' onClick={handleClick}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Favs({`${data.favouritedCards.length}`})
        </button>
        <button className='submitBtn'>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Deck({`${deckData.deck.length}`})
        </button>
      </div>
    </div>
  );
}

export default memo(Filter);
