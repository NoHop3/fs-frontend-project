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
import { useDispatch } from "react-redux";
import { FilterByMana } from "../../../redux/actions/actions";

export default function FilterCost() {
  const dispatch = useDispatch();
  return (
    <div className='filterByMana'>
      <button
        className='manaBtn mana0'
        onClick={() => {
          dispatch(FilterByMana(0));
        }}>
        <img
          className='crystal__image'
          src={crystal0}
          alt={`Crystal with number 0 on it`}
        />
      </button>

      <button
        className='manaBtn mana1'
        onClick={() => {
          dispatch(FilterByMana(1));
        }}>
        <img
          className='crystal__image'
          src={crystal1}
          alt={`Crystal with number 1 on it`}
        />
      </button>

      <button
        className='manaBtn mana2'
        onClick={() => {
          dispatch(FilterByMana(2));
        }}>
        <img
          className='crystal__image'
          src={crystal2}
          alt={`Crystal with number 2 on it`}
        />
      </button>

      <button
        className='manaBtn mana3'
        onClick={() => {
          dispatch(FilterByMana(3));
        }}>
        <img
          className='crystal__image'
          src={crystal3}
          alt={`Crystal with number 3 on it`}
        />
      </button>

      <button
        className='manaBtn mana4'
        onClick={() => {
          dispatch(FilterByMana(4));
        }}>
        <img
          className='crystal__image'
          src={crystal4}
          alt={`Crystal with number 4 on it`}
        />
      </button>

      <button
        className='manaBtn mana5'
        onClick={() => {
          dispatch(FilterByMana(5));
        }}>
        <img
          className='crystal__image'
          src={crystal5}
          alt={`Crystal with number 5 on it`}
        />
      </button>

      <button
        className='manaBtn mana6'
        onClick={() => {
          dispatch(FilterByMana(6));
        }}>
        <img
          className='crystal__image'
          src={crystal6}
          alt={`Crystal with number 6 on it`}
        />
      </button>

      <button
        className='manaBtn mana7'
        onClick={() => {
          dispatch(FilterByMana(7));
        }}>
        <img
          className='crystal__image'
          src={crystal7}
          alt={`Crystal with number 7 on it`}
        />
      </button>

      <button
        className='manaBtn mana8'
        onClick={() => {
          dispatch(FilterByMana(8));
        }}>
        <img
          className='crystal__image'
          src={crystal8}
          alt={`Crystal with number 8 on it`}
        />
      </button>

      <button
        className='manaBtn mana9'
        onClick={() => {
          dispatch(FilterByMana(9));
        }}>
        <img
          className='crystal__image'
          src={crystal9}
          alt={`Crystal with number 9 on it`}
        />
      </button>

      <button
        className='manaBtn mana10'
        onClick={() => {
          dispatch(FilterByMana(10));
        }}>
        <img
          className='crystal__image'
          src={crystal10}
          alt={`Crystal with number 10 on it`}
        />
      </button>
    </div>
  );
}
