import { memo, useCallback } from "react";
import { useDispatch } from "react-redux";

import crystal0 from "../../../assets/legend0_small.png";
import crystal1 from "../../../assets/legend1_small.png";
import crystal2 from "../../../assets/legend2_small.png";
import crystal3 from "../../../assets/legend3_small.png";
import crystal4 from "../../../assets/legend4_small.png";
import crystal5 from "../../../assets/legend5_small.png";
import crystal6 from "../../../assets/legend6_small.png";
import crystal7 from "../../../assets/legend7_small.png";
import crystal8 from "../../../assets/legend8_small.png";
import crystal9 from "../../../assets/legend9_small.png";
import crystal10 from "../../../assets/legend10_small.png";
import { FilterByMana } from "../../../redux/actions/actions";
import { evtClickType } from "../../../typescript/types";

function FilterCost() {
  const dispatch = useDispatch();
  console.log("FILTER Cost IS RENDERING");
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
          src={crystal0}
          alt={`Crystal with number 0 on it`}
        />
      </button>
      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana1'
          src={crystal1}
          alt={`Crystal with number 1 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana2'
          src={crystal2}
          alt={`Crystal with number 2 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana3'
          src={crystal3}
          alt={`Crystal with number 3 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana4'
          src={crystal4}
          alt={`Crystal with number 4 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana5'
          src={crystal5}
          alt={`Crystal with number 5 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana6'
          src={crystal6}
          alt={`Crystal with number 6 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana7'
          src={crystal7}
          alt={`Crystal with number 7 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana8'
          src={crystal8}
          alt={`Crystal with number 8 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana9'
          src={crystal9}
          alt={`Crystal with number 9 on it`}
        />
      </button>

      <button className='manaBtn' onClick={handleClick}>
        <img
          className='crystal__image mana10'
          src={crystal10}
          alt={`Crystal with number 10 on it`}
        />
      </button>
    </div>
  );
}

export default memo(FilterCost);
