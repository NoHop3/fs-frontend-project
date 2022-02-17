import useTemplate from "../../../hooks/useImports";
import { FilterBySearch, GetFavsArray } from "../../../redux/actions/actions";
import { evtChangeType } from "../../../typescript/types";

export default function Filter() {
  const { dispatch, deckData, data } = useTemplate();
  const handleChangeLetter = (evt: evtChangeType) => {
    dispatch(FilterBySearch(evt.target.value));
  };
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
        <button className='submitBtn' onClick={() => dispatch(GetFavsArray())}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Favs({`${data.favouritedCards.length}`})
        </button>
        <button className='submitBtn' onClick={() => console.log(deckData)}>
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