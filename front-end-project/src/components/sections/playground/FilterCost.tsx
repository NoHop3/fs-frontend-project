import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";

import { FilterByMana } from "../../../redux/actions/actions";
import { evtClickType } from "../../../typescript/types";

function FilterCost() {
  const dispatch = useDispatch();
  const handleClick = useCallback(
    (evt: evtClickType) => {
      const element = evt.target as HTMLElement;
      switch (element.className) {
        case "crystal__image mana0":
          dispatch(FilterByMana(0));
          break;
        case "crystal__image mana1":
          dispatch(FilterByMana(1));
          break;
        case "crystal__image mana2":
          dispatch(FilterByMana(2));
          break;
        case "crystal__image mana3":
          dispatch(FilterByMana(3));
          break;
        case "crystal__image mana4":
          dispatch(FilterByMana(4));
          break;
        case "crystal__image mana5":
          dispatch(FilterByMana(5));
          break;
        case "crystal__image mana6":
          dispatch(FilterByMana(6));
          break;
        case "crystal__image mana7":
          dispatch(FilterByMana(7));
          break;
        case "crystal__image mana8":
          dispatch(FilterByMana(8));
          break;
        case "crystal__image mana9":
          dispatch(FilterByMana(9));
          break;
        case "crystal__image mana10":
          dispatch(FilterByMana(10));
          break;
        default:
          break;
      }
    },
    [dispatch]
  );
  return (
    <div className='filterByMana'>
      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana0'
          src='/images/legend0_small.png'
          alt={`Crystal with number 0 on it`}
        />
      </button>
      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana1'
          src='/images/legend1_small.png'
          alt={`Crystal with number 1 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana2'
          src='/images/legend2_small.png'
          alt={`Crystal with number 2 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana3'
          src='/images/legend3_small.png'
          alt={`Crystal with number 3 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana4'
          src='/images/legend4_small.png'
          alt={`Crystal with number 4 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana5'
          src='/images/legend5_small.png'
          alt={`Crystal with number 5 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana6'
          src='/images/legend6_small.png'
          alt={`Crystal with number 6 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana7'
          src='/images/legend7_small.png'
          alt={`Crystal with number 7 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana8'
          src='/images/legend8_small.png'
          alt={`Crystal with number 8 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana9'
          src='/images/legend9_small.png'
          alt={`Crystal with number 9 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana10'
          src='/images/legend10_small.png'
          alt={`Crystal with number 10 on it`}
        />
      </button>
    </div>
  );
}

export default memo(FilterCost);
